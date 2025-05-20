import {
  getBackendOptions,
  MultiBackend,
  Tree,
} from "@minoru/react-dnd-treeview";
import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import OrgToggleItem from "./OrgToggleItem";
import { useLocation } from "react-router-dom";

function CustomTree({ styles, data, handlerDeptAddClick }) {
  const pathname = useLocation().pathname;
  const pGroupPg = pathname.startsWith("/participant-group");
  const [openNodeIds, setOpenNodeIds] = useState([]);
  return (
    <div
      className={`${styles.tree_wrapper} ${pGroupPg ? styles.min_hight : ""}`}
    >
      <DndProvider backend={MultiBackend} options={getBackendOptions()}>
        <Tree
          tree={data || []}
          rootId={0}
          initialOpen={[]} // 모든 노드 닫힘
          onOpenChange={(ids) => setOpenNodeIds(ids)} // 열린 노드 ID 추적
          render={(node, { depth, isOpen, onToggle }) => (
            <>
              <OrgToggleItem
                isOpen={isOpen}
                onToggle={onToggle}
                node={node}
                styles={styles}
                depth={depth}
                parentIsOpen={openNodeIds.includes(node.parent)}
                handlerDeptAddClick={handlerDeptAddClick}
              />
            </>
          )}
          dragPreviewRender={(monitorProps) => <>{monitorProps.item.text}</>}
          //   onDrop={handleDrop}
        />
      </DndProvider>
    </div>
  );
}

export default CustomTree;
