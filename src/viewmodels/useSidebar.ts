import { useSelector, useDispatch } from "react-redux";
import { updateSidebarStateByKey } from "../models/slices/SidebarSlice";
import type { RootState } from "../store";

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
