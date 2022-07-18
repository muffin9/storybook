### StoryBook 개발 환경 셋팅

## 1. storybook yarn add
```
  yarn add @storybook/cli --dev
  yarn sb init
```

![Folder](./images/storybook%20folder.png)

- 최상단의 .storybook 폴더는 스토리북 환경 설정 파일이 담기는 폴더
- src/stories 에는 스토리북 기본 예제 코드들이 담긴 폴더.

---

## 2. emotion + storybook을 사용하기 위해 .storybook 폴더 아래 파일들 수정.

### main.js

```javascript
const path = require("path")

const toPath = (_path) => path.join(process.cwd(), _path)

module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@emotion/core": toPath("node_modules/@emotion/react"),
          "@emotion/styled": toPath("node_modules/@emotion/styled"),
          "emotion-theming": toPath("node_modules/@emotion/react"),
        }
      }
    };
  }
};
```

### preview.js

```javascript
import GlobalStyle from '../src/styles/GlobalStyle';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];
```

---

## 3. yarn run storybook 실행

![StoryBook_Init](./images/storybook%20init.png)

localhost:6006에 접속해보면 설치한 스토리북이 켜짐.

화면에는 스토리북에서 미리 제공되어지는 컴포넌트들을 볼 수 있다.

---

## 4. Custom Button 제작

![StroyBook_Custom](./images/storybook%20custom.png)

emotion을 사용하여 버튼에 스타일링을 입혀 5가지의 버튼을 갖는 형태를 스토리북으로 만들어서 테스팅 해본 결과다.

스토리북에 코드들이 잘 적용이 되긴 하지만, 스토리북이 켜지기 전에 ERR_INVALID_ARG_TYPE 해당 에러가 발생하는데 왜 나는지 확인이 필요