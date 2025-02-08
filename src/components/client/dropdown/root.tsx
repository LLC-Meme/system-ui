"use client";

import * as RadixDropdown from "@radix-ui/react-dropdown-menu";

/**
 * ドロップダウンのルート部分 全てのドロップダウンの親要素
 * ビューには影響を与えない
 */
const DropdownRoot = RadixDropdown.Root;
DropdownRoot.displayName = "DropdownRoot";

export default DropdownRoot;
