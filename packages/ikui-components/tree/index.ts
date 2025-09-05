import Tree from './src/Tree.vue'
import TreeNode from './src/TreeNode.vue'
import { withInstall } from '../_utils/withInstall'

const IkTree = withInstall(Tree)
const IkTreeNode = withInstall(TreeNode)
export default IkTree
export type { ButtonInstance, ButtonType } from './src/tree'
export { IkTreeNode }
