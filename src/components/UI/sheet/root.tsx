"use client";

import * as Dialog from "@radix-ui/react-dialog";

/**
 * シートのルート部分 全てのシートの親要素
 * ビューには影響を与えない
 */
const SheetRoot = Dialog.Root;
SheetRoot.displayName = "SheetRoot";

export default SheetRoot;
