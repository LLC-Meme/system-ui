# Meme System UI  
Memeの社内システムで用いるReactコンポーネントライブラリです。  

## 概要  
- 全てReact/TypeScriptを用いて開発  
- Reactが使えるどのフレームワークでも利用可能  
- Storybookでドキュメント化  
- ChromaticでStorybookをデプロイ  
- デプロイはGitHub Actionsで自動化  

## 依存関係  
- react/react-dom  
- storybook  
- tailwind  
- radix  

## ネクストステップ  
- Dropdownがグループ化されてる問題を解消  
- ダークモード・ライトモードの切り替えに対応  
- DropdownやSheetなどに適宜radixを用いる  
- 単体テストを追加(react-testing-library/Vitest)  
- eslint, prettierを追加  
- ライブラリ化してnpmで使えるようにする  
- ライブラリで問題があれば解決  
- 可能であればstyle定義を呼び出した側にも影響させる  
- ユーティリティコンポーネントを作成  
- ドキュメントを丁寧に書く  