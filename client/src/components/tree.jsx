
const FileTreeNode = ({ fileName, nodes }) => {
    const isDir = !!nodes;
    return (
        <div style={{ marginLeft: '1rem' }}>
            <p className={isDir ? "" : "file-node"}>{fileName}</p>
            
            {nodes && <ul>
                {Object.keys(nodes).map(child => {
                    return (
                    <li key={child}>
                        <FileTreeNode
                            fileName={child}
                            nodes={nodes[child]}
                        />
                    </li>
                    );
                })}
                </ul>}
        </div>
    );
}


const FileTree = ({ tree }) => {
    return (
        <FileTreeNode fileName={'/'} nodes={tree} />
    );
}

export default FileTree;