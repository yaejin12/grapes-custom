import {
  getBackendOptions,
  MultiBackend,
  Tree,
} from "@minoru/react-dnd-treeview";
import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import OrgToggleItem from "./OrgToggleItem";

function CustomTree({ styles, data }) {
  const [openNodeIds, setOpenNodeIds] = useState([]);
  return (
    <div className={styles.tree_wrapper}>
      <DndProvider backend={MultiBackend} options={getBackendOptions()}>
        <Tree
          tree={data || []}
          rootId={0}
          initialOpen={data.map((node) => node.id)}
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
