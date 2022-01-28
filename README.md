Jira

---

一个 react + hook + typescript 的项目

公司需求管理工具

## 学习目的：

- 掌握 React 高级应用
- 培养用 React Hook 抽象逻辑的习惯
- 掌握用 TypeScript 进行精确类型约束的能力
- 综合运用以上技术开发大型项目
- 提升技术能力、技术理念、开发效率

#### 创建项目

使用 create-react-app 创建项目

```
npx create-react-app jira --template typescript
```

#### 配置 base 文件路径

tsconfig.json 增加 baseUrl 配置

```
 "baseUrl": "./src",
```

后面使用路径都可以用 import logo from "src/logo.svg";

## 配置 eslint、prettier 和 commitlint 规范工程

#### 格式化工具 prettier

[prettier 官网链接](https://prettier.io/)

```
yarn add --dev --exact prettier
echo {}> .prettierrc.json
echo > .prettierignore
```

使用 Pre-commit Hook,配置代码提交前，自动格式化
[配置文档](https://prettier.io/docs/en/precommit.html)

```
npx mrm@2 lint-staged
yarn add eslint-config-prettier -D
```

#### commitlint 规范工程

https://github.com/conventional-changelog/commitlint

```
yarn add @commitlint/{config-conventional,cli}
```
