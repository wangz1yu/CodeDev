## 联系表单配置说明

### 当前实现（Formspree）
表单已配置为使用 Formspree，这样客户提交的信息会直接发送到你的邮箱。

### 🚀 快速设置步骤

#### 1. 注册 Formspree（推荐）
1. 访问 [formspree.io](https://formspree.io)
2. 注册免费账户（每月50次提交免费）
3. 创建新表单项目
4. 复制你的表单 ID（类似：`xbjvgrkd`）
5. 在 `Form.astro` 中将 `YOUR_FORM_ID` 替换为你的 ID

**例如：**
```html
action='https://formspree.io/f/xbjvgrkd'
```

#### 2. 你将收到的邮件内容包括：
- ✅ 客户姓名
- ✅ 客户邮箱
- ✅ 主题
- ✅ 详细消息
- ✅ 联系偏好（邮件/电话/微信）
- ✅ 提交时间
- ✅ 使用的语言

### 📧 其他选择

#### Netlify Forms
如果部署在 Netlify：
```html
<form data-netlify="true" name="contact">
```
- 在 Netlify Dashboard → Forms 查看提交
- 可设置邮件通知

#### EmailJS
纯前端解决方案：
```javascript
emailjs.send('service_id', 'template_id', formData)
```

#### 自定义邮箱
也可以简单地让用户直接发邮件：
```html
<a href="mailto:your@email.com?subject=项目咨询">直接邮件联系</a>
```

### 🔧 表单功能特性
- ✅ 实时验证
- ✅ 多语言支持
- ✅ 加载状态指示
- ✅ 成功/错误消息
- ✅ 防垃圾邮件
- ✅ 响应式设计
- ✅ 联系偏好选择

### 📊 监控和分析
使用 Formspree 后台可以：
- 查看所有提交记录
- 下载数据为 CSV
- 设置自动回复
- 集成 Google Sheets
- 查看提交统计

### 💡 建议
1. 设置自动回复让客户知道你已收到消息
2. 在24-48小时内回复客户
3. 考虑添加实时聊天工具（如 Intercom、Crisp）
4. 定期备份表单数据
