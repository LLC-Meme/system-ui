# Meme System UI  
Memeの社内システムで用いるReactコンポーネントライブラリです。  
Apple風のデザインで様々なUIを提供します。  

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
- recharts

## 使い方
### 当ライブラリをインストール
`npm install meme-system-ui`
### cssファイルを読み込む
`import "meme-system-ui/tailwind.css"`でcssを読み込む
### tailwindの設定
適宜`tailwind.config.ts`ファイルをコピペする