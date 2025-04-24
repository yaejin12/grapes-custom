import { v4 as uuidV4 } from "uuid";
// [s]style manager sectors custom
export const styleManagerSectors = [
  {
    name: "정렬",
    open: true,
    buildProps: ["text-align", "vertical-align"],
    properties: [
      {
        property: "text-align",
        name: "가로 정렬",
        options: [
          { value: "left", name: "왼쪽" },
          { value: "center", name: "가운데" },
          { value: "right", name: "오른쪽" },
        ],
      },
      {
        property: "vertical-align",
        name: "세로 정렬",
        type: "radio",
        options: [
          { value: "top", name: "위" },
          { value: "middle", name: "가운데" },
          { value: "bottom", name: "아래" },
        ],
      },
    ],
  },
  {
    name: "크기",
    open: true,
    buildProps: ["width", "height"],
    properties: [
      { property: "width", name: "너비" },
      { property: "height", name: "높이" },
    ],
  },
  {
    name: "색상",
    open: false,
    buildProps: ["color", "background-color"],
    properties: [
      { property: "color", name: "글자 색상" },
      { property: "background-color", name: "배경 색상" },
    ],
  },
  {
    name: "타이포그래피",
    open: false,
    buildProps: [
      "font-family",
      "font-size",
      "font-weight",
      "letter-spacing",
      "line-height",
    ],
    properties: [
      {
        property: "font-family",
        name: "폰트",
        options: [
          { name: "Apple SD 고딕", value: "'Apple SD Gothic', sans-serif" },
          { name: "맑은 고딕", value: "'Malgun Gothic', sans-serif" },
          { name: "나눔 고딕", value: "'Nanum Gothic', sans-serif" },
          { name: "Arial", value: "Arial, sans-serif" },
          { name: "굴림", value: "Gulim, sans-serif" },
          { name: "Verdana", value: "Verdana, sans-serif" },
          { name: "Times New Roman", value: "'Times New Roman', serif" },
        ],
      },
      { property: "font-size", name: "글자 크기" },
      { property: "font-weight", name: "글자 굵기" },
      { property: "letter-spacing", name: "자간" },
      { property: "line-height", name: "줄 간격" },
    ],
  },

  {
    name: "테두리",
    open: false,
    buildProps: [
      "border-width",
      "border-style",
      "border-color",
      "border-radius",
    ],
    properties: [
      { property: "border-width", name: "선 두께" },
      {
        property: "border-style",
        changeProp: 1,
        name: "선 종류",
        options: [
          { value: "none", name: "없음" },
          { value: "solid", name: "실선" },
          { value: "dashed", name: "점선" },
          { value: "dotted", name: "점점선" },
          { value: "double", name: "이중선" },
        ],
      },

      { property: "border-radius", name: "둥근 테두리" },
    ],
  },
  {
    name: "여백",
    open: false,
    buildProps: [
      "padding-top",
      "padding-right",
      "padding-bottom",
      "padding-left",
    ],
    properties: [
      { property: "padding-top", name: "위" },
      { property: "padding-right", name: "오른쪽" },
      { property: "padding-bottom", name: "아래" },
      { property: "padding-left", name: "왼쪽" },
    ],
  },
];
// [e]style manager sectors custom
// ==============================
// [s]globalCss
export const globalCSS = `
    span{
       font-family:'Apple SD Gothic', Arial, sans-serif;
       font-weight:500;
    }

    a{
       color: inherit;
       text-decoration: none;
       font-family:'Apple SD Gothic', Arial, sans-serif;
       font-weight:500;
    }

    img{
       max-width: 100%;
       height: auto;
    }

    /*div*/
    .email-table-wrapper{
       margin: 0 auto;
       font-size: 15px;
       width: 100%; 
       box-sizing: border-box;
       background-color:transparent;
    }

    .custom-table{
       background-color:rgb(255, 255, 255);
       margin: 0 auto;
    }


    /*row*/
    .custom-row{
       display: table;
       width: 100%; 
       height: 75px;
       padding:3px;
       box-sizing: border-box;
    }

    /*cell*/
    .custom-cell {
       display: table-cell;
       box-sizing: border-box;
       vertical-align: top;
    }

    /* 버튼 초기값 */
    .editor_button_default {
       display: inline-block;
       width: 200px;
       height:35px;
       line-height: 35px;
       font-size: 13px;
       text-align: center;
       border-radius: 5px;
       border: none;
       cursor: pointer;
       color: #ffffff;
       background-color:rgb(119, 119, 119);
       box-sizing: border-box;
       text-decoration: none;
       font-family:'Apple SD Gothic', Arial, sans-serif;
       font-weight:500;
    }

    /* input 초기값 */
    .editor_input_default {
       border: 1px solid #d4d4d4;
       padding: 10px 15px;
       background-color:#ffffff;
       font-size: 14px;
       border-radius: 2px;
       width: 280px;
       height:35px;
       box-sizing: border-box;
       font-family:'Apple SD Gothic', Arial, sans-serif;
       font-weight:500;
      }

    /*가상 div*/
    [data-gjs-highlightable] {
       margin: 0 auto;
    }
      `;

// [e]globalCss
// ==============================
// [s]리사이징 설정 공통 변수
export const resizableOptions = {
  tl: true,
  tc: true,
  tr: true,
  cl: true,
  cr: true,
  bl: true,
  bc: true,
  br: true,
  keyWidth: "width",
  keyHeight: "height",
};
// [e]리사이징 설정 공통 변수
// ==============================
// category
export const sharedCategory = {
  id: "design-blocks",
  label: "디자인 블록",
};

// [s]한개열 블록 커스텀
export const customColumnAddBlockManager = {
  id: "custom-column",
  label: "1개 열",
  category: sharedCategory,
  content: () => ({
    tagName: "table",
    attributes: {
      border: "0",
      cellpadding: "0",
      cellspacing: "0",
      width: "100%",
    },
    components: [
      {
        tagName: "tr",
        attributes: {
          class: `custom-row row_${Date.now()}_${Math.floor(
            Math.random() * 10
          )}`,
        },
        components: [
          {
            tagName: "td",
            attributes: {
              class: `custom-cell cell_${Date.now()}_${Math.floor(
                Math.random() * 10
              )}`,
            },
            components: [],
          },
        ],
      },
    ],
  }),
};
// [e]한개열 블록 커스텀
// [s]두개열 블록 커스텀
export const customColumn2AddBlockManager = {
  id: "custom-column2",
  label: "2개 열",
  category: sharedCategory,
  content: () => ({
    tagName: "table",
    attributes: {
      border: "0",
      cellpadding: "0",
      cellspacing: "0",
      width: "100%",
    },
    components: [
      {
        tagName: "tr",
        attributes: {
          class: `custom-row row_${Date.now()}_${Math.floor(
            Math.random() * 10
          )}`,
        },
        components: [
          {
            tagName: "td",
            attributes: {
              class: `custom-cell cell_${Date.now()}_${Math.floor(
                Math.random() * 10
              )}`,
            },
            components: [],
          },
          {
            tagName: "td",
            attributes: {
              class: `custom-cell cell_${Date.now()}_${Math.floor(
                Math.random() * 10
              )}`,
            },
            components: [],
          },
        ],
      },
    ],
  }),
};

// [e]두개열 블록 커스텀
// [s]텍스트 블록 커스텀
export const customTextAddType = {
  extend: "text",
  model: {
    defaults: {
      traits: [], // ✅ 여기서 traits 제거
    },
  },
};
export const customTextAddBlockManager = {
  label: "텍스트",
  category: sharedCategory,
  content: {
    tagName: "span",
    type: "text",
    components: "텍스트를 입력하세요",
  },
};
// [e]텍스트 블록 커스텀
// [s]링크 블록 커스텀
export const customLinkAddType = {
  model: {
    defaults: {
      tagName: "a",
      traits: [
        {
          type: "text",
          name: "href", // trait 이름
          label: "링크 주소",
          placeholder: "https://example.com",
          changeProp: 1,
        },
      ],
      attributes: {
        href: "",
      },
      propName: "href",
    },

    init() {
      this.on("change:href", () => {
        this.addAttributes({
          href: this.get("href"),
        });
      });
    },
  },
};

export const customLinkAddBlockManager = {
  label: "링크",
  category: sharedCategory,
  content: {
    type: "link",
    content: "여기를 눌러주세요",
  },
};
// [e]링크 블록 커스텀
// [s]버튼블록 커스텀
// add type
export const customButtonAddType = {
  model: {
    defaults: {
      tagName: "a",
      components: ["버튼"],
      traits: [
        {
          type: "text",
          name: "buttonText",
          label: "버튼 텍스트",
          changeProp: 1,
        },
      ],
      attributes: {},
    },

    init() {
      this.setAttributes({
        href: `NOT_YET_${uuidV4()}`,
        "data-id": `${uuidV4()}`,
      });
      // 텍스트 초기값 처리
      const initValue = this.get("buttonText") || "버튼 텍스트";
      this.components().reset([initValue]); // 👈 span 대신 직접 문자열

      this.on("change:buttonText", () => {
        const value = this.get("buttonText");
        if (value) {
          this.components().reset([value]);
        }
      });
    },

    // 3. HTML 렌더링 시 buttonText 속성은 제거
    getAttrToHTML() {
      const attr = { ...this.getAttributes() };
      delete attr.buttonText;
      return attr;
    },
  },
};
// BlockManager
export const customButtonAddBlockManager = {
  label: "버튼",
  category: sharedCategory,
  content: () => ({
    type: "button",
    attributes: {
      class: `editor_button_default button_${Date.now()}_${Math.floor(
        Math.random() * 10
      )}`,
    },
  }),
};

// [e]버튼블록 커스텀
// [s]인풋블록 커스텀
export const customInputAddBlockManager = {
  label: "인풋",
  category: sharedCategory,
  content: {
    tagName: "input",
    attributes: {
      class: `editor_input_default input_${Date.now()}_${Math.floor(
        Math.random() * 1000
      )}`,
      type: "text",
    },
    traits: [
      {
        type: "text",
        label: "Placeholder",
        name: "placeholder",
      },
    ],
  },
};
// [e]인풋블록 커스텀
// [s]대상자명 삽입 블록 커스텀
export const customUserNameAddBlockManager = {
  label: "대상자 명",
  media: '<img src="/images/user-name.svg" style=" height: 20px;" />',
  category: sharedCategory,
  content: {
    tagName: "span",
    components: "{user_name}",
    attributes: {},
  },
};
// [e]대상자명 삽입 블록 커스텀
// [s]image modal 한국말 커스텀
export const i18nImgCustom = {
  messages: {
    ko: {
      assetManager: {
        addButton: "이미지 추가",
        inputPlh: "이미지 경로를 입력하세요",
        modalTitle: "이미지 선택",
        uploadTitle: "파일을 여기에 드래그하거나 클릭하여 업로드",
      },
    },
  },
  locale: "ko", // 사용 언어를 'ko'로 설정
};
// [e]image modal 한국말 커스텀
// [s]감싸는 table 테이블 속성
export const tableAppend = {
  tagName: "div",
  attributes: {
    class: "email-table-wrapper",
  },
  droppable: ["table"],
  components: [
    {
      tagName: "table",
      attributes: {
        class: "custom-table",
        cellpadding: "0",
        cellspacing: "0",
        border: "0",
        style: "min-width:600px; table-layout: fixed; min-height: 500px; ",
      },
      components: [
        {
          tagName: "tr",
          attributes: {
            style: "padding: 3px; width:100%;",
          },
          components: [
            {
              tagName: "td",
              attributes: {
                style: "vertical-align: top; width:100%;",
              },
            },
          ],
        },
      ],
    },
  ],
};
// [e]table 테이블 속성
export const shortenBase64Src = (html) => {
  return html.replace(
    /src="(data:image\/[^;]+;base64,)([^"]{30,})"/g,
    (match, prefix, base64) => `src="${prefix}${base64.slice(0, 30)}..."`
  );
};

//
