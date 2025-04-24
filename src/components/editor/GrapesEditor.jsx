import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import basicBlocks from "grapesjs-blocks-basic";
import React, { useEffect, useRef } from "react";
import styles from "./GrapesEditor.module.scss";
import { v4 as uuidV4 } from "uuid";
import {
  customButtonAddBlockManager,
  customButtonAddType,
  customColumn2AddBlockManager,
  customColumnAddBlockManager,
  customInputAddBlockManager,
  customLinkAddBlockManager,
  customLinkAddType,
  customTextAddBlockManager,
  customTextAddType,
  customUserNameAddBlockManager,
  globalCSS,
  i18nImgCustom,
  resizableOptions,
  sharedCategory,
  shortenBase64Src,
  styleManagerSectors,
  tableAppend,
} from "./data/editorConfig";

function GrapesEditor() {
  const editorRef = useRef(null);

  useEffect(() => {
    const editor = grapesjs.init({
      container: editorRef.current,
      plugins: [basicBlocks],
      pluginsOpts: {
        [basicBlocks]: {
          category: sharedCategory,
        },
      },
      styleManager: {
        clearProperties: true,
        sectors: styleManagerSectors,
      },
      i18n: i18nImgCustom, // 이미지 모달 한국말 커스텀
      storageManager: false,
    });

    // ✅ 전역 CSS 설정: setStyle을 사용하여 에디터 캔버스에 적용할 CSS를 지정
    editor.setStyle(globalCSS);

    // ========================
    // editor.on("component:add", (component) => {
    //   applyResizable(component); // 1. 리사이징 적용 함수
    // });

    editor.on("component:add", (component) => {
      // 👉 tagName으로 제한 걸기
      const tagName = component.get("tagName")?.toLowerCase();
      const allowed = ["button", "input", "tr", "img"];

      if (allowed.includes(tagName)) {
        applyResizable(component);
      }
    });

    // 2. 리사이징 적용 함수
    function applyResizable(component) {
      component.set("resizable", resizableOptions);
    }

    // 3. 기본 블록 타입들에 resizable 기능 추가
    // editor.DomComponents.getWrapper()
    //   .components()
    //   .forEach((comp) => {
    //     comp.set("resizable", resizableOptions);
    //   });

    editor.DomComponents.getWrapper()
      .components()
      .forEach((comp) => {
        const tagName = comp.get("tagName")?.toLowerCase();
        const allowed = ["a", "input", "tr", "img"];

        if (allowed.includes(tagName)) {
          comp.set("resizable", resizableOptions);
        }
      });
    // ========================
    // ========================
    // [s] 블록
    // 열 블록 trait 제거
    editor.DomComponents.addType("default", {
      extend: "default",
      model: {
        defaults: {
          traits: [],
        },
      },
    });
    // ========================
    // [s] add Type
    // 버튼 컴포넌트 타입 정의 (사용자 텍스트 입력 가능하게 설정)
    editor.DomComponents.addType("text", customTextAddType);
    editor.DomComponents.addType("button", customButtonAddType);
    editor.DomComponents.addType("link", customLinkAddType);
    // ✅ 블록 수정
    editor.on("load", () => {
      // [s] 코드 미리보기 시 이미지 코드 단축
      const buttons = document.querySelectorAll(".gjs-pn-btn");
      buttons.forEach((btn) => {
        // title이 "View code"인 버튼을 찾기
        if (btn.title === "View code") {
          // 실행할 함수
          btn.addEventListener("click", () => {
            setTimeout(() => {
              const cm = document.querySelector(".CodeMirror")?.CodeMirror;
              if (cm) {
                const html = editor.getHtml();
                const shortened = shortenBase64Src(html);
                cm.setValue(shortened);
              }
            }, 100);
          });
        }
      });
      // [e] 코드 미리보기 시 이미지 코드 단축
      // [s]초기 table 감싸기
      const editorWrapper = editor.getWrapper();
      if (editorWrapper.components().length === 0) {
        editorWrapper.append(tableAppend);
      }
      // [e]초기 table 감싸기
      // ========================
      // [s]body안에 table만 드롭 가능
      editor.DomComponents.getWrapper().set({
        droppable: false,
      });
      // [e]이 wrapper 안에는 table만 드롭 가능
      // ========================
      // [s]상단 아이콘 순서 바꾸기
      const pn = editor.Panels;
      // 1. 버튼 객체 가져오기
      const styleBtn = pn.getButton("views", "open-sm"); // Style Manager
      const blockBtn = pn.getButton("views", "open-blocks"); // Block Manager
      const layersBtn = pn.getButton("views", "open-layers");
      // 2. 일단 기존 버튼 제거
      pn.removeButton("views", "open-sm");
      pn.removeButton("views", "open-blocks");
      pn.removeButton("views", "open-layers"); // 사용 중이라면
      // 3. 원하는 순서로 다시 추가
      pn.addButton("views", layersBtn); // 레이어
      pn.addButton("views", styleBtn); // 스타일
      pn.addButton("views", blockBtn); // 블록
      // 4. 본 활성화 버튼 지정: 블록
      pn.getButton("views", "open-blocks")?.set("active", true);
      // [e]상단 아이콘
      // ========================
      // [s]블록 순서 바꾸기 & 블록 등록
      const imageBlock = editor.BlockManager.get("image");
      const blockList = [
        { id: "custom-column", config: customColumnAddBlockManager },
        { id: "custom-column2", config: customColumn2AddBlockManager },
        { id: "text", config: customTextAddBlockManager },
        { id: "link", config: customLinkAddBlockManager },
        {
          id: "image", // 기본 이미지 블록
          config: {
            ...imageBlock?.attributes,
            label: "이미지",
            category: sharedCategory,
          },
        },
        { id: "button", config: customButtonAddBlockManager },
        { id: "input", config: customInputAddBlockManager },
        { id: "userName", config: customUserNameAddBlockManager },
      ];
      // 1. 블록 제거
      [
        "text",
        "column1",
        "column2",
        "column3",
        "column3-7",
        "video",
        "map",
        "link",
      ].forEach((id) => editor.BlockManager.remove(id));

      // 2.순서대로 다시 등록
      blockList.forEach(({ id, config }) => {
        if (editor.BlockManager.get(id)) {
          editor.BlockManager.remove(id);
        }
        if (config) {
          // 블록 등록
          editor.BlockManager.add(id, config);
        }
      });
      // [e]블록 순서 바꾸기
      // ========================
      // table 삭제 시 안내 문구 자동 추가
      editor.on("component:remove", (component) => {
        const wrapper = editor.getWrapper();
        const isTable = component.get("tagName") === "table";
        if (isTable && wrapper.components().length === 0) {
          wrapper.append(tableAppend);
        }

        // tr 안에 td가 하나도 없을 때 자동으로 하나 추가
        const parent = component.parent();
        const tag = component.get("tagName");
        const parentTag = parent?.get("tagName");

        if (tag === "td" && parentTag === "tr") {
          const remaining = parent.components().length;
          if (remaining === 0) {
            parent.append({
              tagName: "td",
              attributes: {
                style: "vertical-align:top;",
              },
              components: [],
            });
          }
        }
      });
      // ========================
      // [s]블록 한글 변경
      // 1. 블록 라벨 한글 변경
      const blocksToRename = {
        image: "이미지",
      };
      // 2. text 라벨 변경
      Object.entries(blocksToRename).forEach(([id, label]) => {
        const block = editor.BlockManager.get(id);
        if (block) {
          block.set("label", label);
        } else {
          console.warn(`"${id}" 블록을 찾을 수 없습니다.`);
        }
      });

      // [e]블록 순서 바꾸기 & 블록 등록
      // ========================
      // ✅ 왼쪽 캔버스 배경 설정
      const canvasBody = editor.Canvas.getBody();
      canvasBody.setAttribute(
        "style",
        "margin: 30px auto; width: 100%; box-sizing: border-box; background-color: rgb(161, 161, 161);"
      );

      // ========================
      // [s]trait 패널 커스터마이징
      // 1.trait 패널 커스터마이징
      editor.on("component:selected", (component) => {
        // 항상 기존 패널 제거
        const prevCustomPanel = document.getElementById("custom-trait-panel");
        if (prevCustomPanel) prevCustomPanel.remove();

        // 새 패널 생성
        const customTraitPanel = document.createElement("div");
        customTraitPanel.id = "custom-trait-panel";
        customTraitPanel.className = styles.customTraitPanel;

        // ✅ 여기에서 attribute → prop 동기화
        const tagName = component.get("tagName");
        if (tagName === "a") {
          const hrefAttr = component.getAttributes().href;
          const hrefProp = component.get("href");

          if (!hrefProp && hrefAttr) {
            component.set("href", hrefAttr);
          }
        }

        // 트레잇 패널 (조건 없이 항상 추가)
        editor.TraitManager.__target = component;
        const traitEl = editor.TraitManager.render();
        customTraitPanel.appendChild(traitEl);

        // ✅ "a 태그"일 때만 URL 삽입 버튼 추가
        if (
          component.get("tagName") === "a" &&
          !component.getClasses().includes("editor_button_default")
        ) {
          const insertBtn = document.createElement("button");
          insertBtn.innerText = "위험 링크 삽입";

          const primaryColor = getComputedStyle(
            document.documentElement
          ).getPropertyValue("--gjs-primary-color");

          insertBtn.style.marginTop = "8px";
          insertBtn.style.padding = "4px 8px";
          insertBtn.style.cursor = "pointer";
          insertBtn.style.fontSize = "12px";
          insertBtn.style.background = primaryColor.trim();
          insertBtn.style.border = "1px solid #ccc";
          insertBtn.style.width = "100%";

          insertBtn.onclick = () => {
            component.set("href", `NOT_YET_${uuidV4()}`); // ✅ 이게 중요
            component.addAttributes({
              "data-id": uuidV4(),
            });
          };
          customTraitPanel.appendChild(insertBtn);
        }

        // 원하는 위치에 삽입
        const noCatContainer = document.querySelector(
          ".gjs-blocks-no-cat .gjs-blocks-c"
        );
        noCatContainer?.appendChild(customTraitPanel);
      });

      // [e]trait 패널 커스터마이징
      // ========================
      // [s] 상단'settings'아이콘 제거
      editor.Panels.removePanel("settings");
      const cogBtn = document.querySelector(".gjs-pn-btn.fa-cog");
      if (cogBtn) cogBtn.remove();
      // [e] 상단'settings'아이콘 제거
      // ========================
      // 불필요한 'Device' 버튼 제거
      const devicePanelEl = document.querySelector(".gjs-devices-c");
      if (devicePanelEl) {
        devicePanelEl.remove();
      }
      // 불필요한 'Classes' 영역 제거
      const classesWrapper = document.querySelector(".gjs-clm-tags");
      if (classesWrapper) {
        classesWrapper.remove(); // 완전 제거
      }

      const targets = document.querySelectorAll(
        ".gjs-fields .gjs-sm-properties"
      );
      targets.forEach((el) => el.removeAttribute("class"));

      // 흰색 영역 높이 unset 으로 변경
      const wrapperEl = editor.Canvas.getDocument().querySelector(
        '[data-gjs-type="wrapper"]'
      );
      if (wrapperEl) wrapperEl.style.minHeight = "unset";
      // ========================
      // [s]한글 안내문구 적용
      // styleManager 문구
      const smNoSel = document.querySelector(".gjs-sm-header");
      if (smNoSel) smNoSel.innerHTML = `스타일 적용할 요소를<br/>선택해주세요.`;
      // [e]한글 안내문구 적용
      // ========================
      // [s]복사하면 class 다른 이름으로 변경하기
      editor.on("component:clone", (cloned) => {
        if (cloned.get("tagName") === "td") {
          const newClass = `custom-cell cell_${Date.now()}_${Math.floor(
            Math.random() * 10
          )}`;

          // 1. 기존 클래스에서 cell_ 계열 제거
          const attrs = cloned.get("attributes") || {};
          const prevClass = attrs.class || "";
          const keptClasses = prevClass
            .split(" ")
            .filter((cls) => !cls.startsWith("cell_"))
            .join(" ");

          // 2. 새로운 클래스 조합으로 덮어쓰기
          cloned.setAttributes({
            ...attrs,
            class: `${keptClasses} ${newClass}`.trim(),
          });
        }
      });
      // [e]복사하면 class 다른 이름으로 변경하기
    });
    // [e] 블록
    // ========================

    return () => editor.destroy();
  }, []);

  return (
    <section className={styles.editor_section}>
      <div ref={editorRef} />
    </section>
  );
}

export default GrapesEditor;
