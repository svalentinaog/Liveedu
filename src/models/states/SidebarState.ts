export interface ISidebarState {
  currentPage: number;
}

export type SidebarStateKeys = keyof ISidebarState;

export type SidebarStateUpdate = { key: "currentPage"; value: number };

const SidebarState: ISidebarState = {
  currentPage: 1, // Página inicial
};

export default SidebarState;
