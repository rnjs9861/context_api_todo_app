# 1. State와 Props로 할일 목록 앱 개발 (JSX 버전)

- 실제로는 이렇게까지 복잡하게 컴포넌트를 구성하지 않습니다.
- ContextAPI 실습을 위해 구조를 이렇게 해볼께요

## 1.1 컴포넌트 구조

- App
  - TodoList Data
    - DataView
      - Title
      - TodoList
        - TodoItem
  - Todo Data
    - Input
      - TodoIput
        - TextInput
        - AddButton
      - InputButton

### 1.1.1 컴포넌트 분리 기준

- 이 구조는 프로젝트 마다 달라질 수 있습니다.

- PageComponent : 데이터의 상태관리를 할 수 있도록 해보자
- UiComponent : 화면 또는 페이지를 구성하는 UI로직을 가지도록 해보자
- ApiComponent : API로직을 분리 해보자
