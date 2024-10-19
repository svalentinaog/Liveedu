import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store";
import { updateSidebarStateByKey } from "../models/slices/SidebarSlice";

export default function useSidebar() {
  const dispatch = useDispatch();
  const sidebar = useSelector((state: RootState) => state.sidebar);

  const updatePage = (page: number) => {
    dispatch(updateSidebarStateByKey({ key: "currentPage", value: page }));
  };

  return {
    sidebar, // Estado actual del sidebar
    methods: { updatePage },
  };
}
