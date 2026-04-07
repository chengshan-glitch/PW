# GitHub 登入頁仿製教學

這份教學文件會說明如何使用 HTML、CSS 和 JavaScript 建置一個 GitHub 官方登入頁面的仿製作品。目標是讓讀者能從頭理解頁面結構、樣式與互動功能。

## 專案內容

專案檔案：
- `index.html`：頁面結構與內容
- `style.css`：頁面樣式與排版
- `script.js`：輸入驗證與登入互動
- `github-3382.png`：使用於頁面中的 GitHub Logo 圖示

## 1. 建立 HTML 結構

先建立 `index.html` 並加入基本 HTML 模板：

- `<!DOCTYPE html>`：指定 HTML5 文件
- `<html lang="zh-CN">`：定義語言為中文
- `<head>`：放置編碼、響應式設定、標題與 CSS
- `<body>`：放置頁面內容

在 `body` 中建立一個 `.container` 容器，並放入 `.login-box`：

- `.logo-section`：顯示 GitHub Logo
- `<h1>`：登入頁標題
- `<form id="loginForm">`：包含帳號、密碼欄位與登入按鈕
- `.signup-section`：提供註冊連結

### HTML 範例

```html
<form id="loginForm">
  <div class="form-group">
    <label for="username">Username or email address</label>
    <input type="text" id="username" placeholder="Username or email address" required>
    <span class="error-message" id="usernameError"></span>
  </div>

  <div class="form-group">
    <div class="form-row">
      <label for="password">Password</label>
      <a href="#" class="link">Forgot password?</a>
    </div>
    <input type="password" id="password" placeholder="Password" required>
    <span class="error-message" id="passwordError"></span>
  </div>

  <button type="submit" class="signin-btn">Sign in</button>
</form>
```

## 2. 設計 CSS 樣式

`style.css` 主要負責：
- 背景色
- 登入框大小與位置
- 輸入欄位樣式
- 按鈕樣式
- 響應式調整

### 版型重點

- `.container` 使用 `display: flex; justify-content: center; align-items: center;` 可置中登入框。
- `.login-box` 設定 `max-width: 340px`，能更接近 GitHub 官方登入框寬度。
- `input[type="text"]` 與 `input[type="password"]` 設定圓角、邊框與 focus 效果。
- `button` 使用綠色背景與滑鼠懸停效果。

### CSS 重要片段

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 16px;
}

.login-box {
  max-width: 340px;
  padding: 40px;
  background-color: #f6f8fa;
  border: 1px solid transparent;
  border-radius: 6px;
  box-shadow: none;
}

input[type="text"], input[type="password"] {
  padding: 10px 12px;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
}

input:focus {
  border-color: #0969da;
  box-shadow: 0 0 0 3px rgba(9, 105, 218, 0.14);
}

.signin-btn {
  width: 100%;
  padding: 10px 16px;
  background-color: #1f883d;
  border-radius: 6px;
}
```

## 3. 新增 JavaScript 互動

使用 `script.js` 來加入表單驗證與模擬登入流程。主要步驟：

1. 取得 DOM 元素
2. 綁定 `submit` 事件
3. 檢查欄位是否為空
4. 顯示錯誤訊息
5. 成功時顯示模擬登入提示

### JavaScript 重要程式

```js
loginForm.addEventListener('submit', function(e) {
  e.preventDefault();
  clearErrors();

  if (!usernameInput.value.trim()) {
    showError(usernameInput, usernameError, 'Username or email is required');
  }

  if (!passwordInput.value) {
    showError(passwordInput, passwordError, 'Password is required');
  }

  if (isValid) {
    handleSignIn(usernameInput.value, passwordInput.value);
  }
});
```

## 4. 如何執行這個專案

1. 將 `index.html`、`style.css`、`script.js` 和 `github-3382.png` 放在同一個資料夾。
2. 直接在瀏覽器中開啟 `index.html`。
3. 當表單提交時，會顯示驗證結果與模擬登入訊息。

## 5. 延伸學習方向

你可以繼續增加以下功能來加深練習：
- 加入「記住我」勾選框
- 加入更完整的 email 格式驗證
- 改用 Grid 版型設計更複雜的登入卡片
- 增加更多響應式微調，優化手機版排版

---

這份文件可以當作教學指南，讓你的同學或朋友一步步理解如何從 HTML 結構、CSS 版型到 JavaScript 互動，完成一個仿 GitHub 登入頁的練習作品。