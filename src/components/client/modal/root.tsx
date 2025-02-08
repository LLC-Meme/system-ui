"use client";

import * as Dialog from "@radix-ui/react-dialog";

/**
 * モーダルのルート部分 全てのモーダルの親要素
 * ビューには影響を与えない
 */
const ModalRoot = Dialog.Root;
ModalRoot.displayName = "ModalRoot";

export default ModalRoot;
