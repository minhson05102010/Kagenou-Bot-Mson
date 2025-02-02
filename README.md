
## The Seven Shadows

The Seven Shadows are Cid Kagenou's elite shadow organization.  Each member possesses unique skills and plays a crucial role in Cid's plans.

| King of Shadow garden | Image             | Description                                                                        |
|--------------|----------------------|------------------------------------------------------------------------------------|
| Cid Kagenou (King)        | ![Shadow](image/Shadow.jpg) | Cid Kagenou hay còn gọi là cái bóng là vua của khu vườn bóng tối và bảy cái bóng, còn những người đồng đội trung thành của anh là Alpha là thủ lĩnh mạnh nhất trong Bảy cái bóng.                                   |

| Member Name | Image             | Description                                                                        |
|--------------|----------------------|------------------------------------------------------------------------------------|
| Alpha (Leader)       | ![Alpha](image/Alpha.jpg) | [Alpha là người mạnh nhất của Seven Shadow Garden, một kiếm sĩ ma thuật mạnh mẽ. Anh ấy là một người trung thành và quyết đoán, luôn đặt lợi ích của đồng đội lên hàng đầu. Tuy nhiên, sức mạnh thực sự của anh lại ẩn giấu bên dưới vẻ ngoài có vẻ vui tươi và vô tư..]                                            |
| Beta         | ![Beta](image/Beta.jpg)  | [Beta là bộ não của nhóm, một chiến lược gia tài giỏi và một chuyên gia về phép thuật. Cô ấy nổi tiếng với phong thái điềm tĩnh và tự chủ, nhưng cô ấy cũng có thể cực kỳ tàn nhẫn khi cần thiết..] |
| Gamma        | ![Gamma](image/Gamma.jpg) | [Gamma là bậc thầy võ thuật, sử dụng nắm đấm của mình với tốc độ và sức mạnh đáng kinh ngạc. Cô ấy có tính độc lập quyết liệt và thường đóng vai trò là tiếng nói của lý trí trong Thất Ảnh Vườn..]|
| Delta        | ![Delta](image/Delta.jpg) | [
Delta là một cung thủ và xạ thủ điêu luyện, nổi tiếng với độ chính xác tuyệt đối. Cô ấy trung thành mãnh liệt với đồng đội của mình và sẽ không dừng lại để bảo vệ họ.]|
| Epsilon      | ![Epsilon](image/Epsilon.jpg) | [Epsilon là bậc thầy về ảo tưởng và lừa dối, có khả năng thao túng tâm trí người khác. Anh ta là một người xảo quyệt và lôi kéo, nhưng anh ta cũng có ý thức mạnh mẽ về công lý..]|
| Zeta         | ![Zeta](image/Zeta.jpg)  | [Zeta là bậc thầy về tàng hình và xâm nhập, có khả năng di chuyển xuyên qua bóng tối mà không bị phát hiện. Cô ấy là một sát thủ lành nghề và là một đối thủ nguy hiểm khi cận chiến.] |
| Eta          | ![Eta](image/Eta.jpg)   | [Eta là một người chữa bệnh lành nghề và là bậc thầy về phép thuật cuộc sống. Cô là người tốt bụng và giàu lòng nhân ái, luôn sẵn sàng giúp đỡ những người gặp khó khăn.]  |

## License

MIT License

Copyright (c) Date: January 20, 2025 | Minh Son depchai🔮

===🪦Link phây búc Minh Sơn Đẹp Chai🌸===
https://www.facebook.com/lms.cutii
===🔮Discord Minh Sơn cak to🦠===
https://discord.gg/j8F44eUX
PHẦN MỀM ĐƯỢC CUNG CẤP "NGUYÊN TRẠNG", KHÔNG CÓ BẢO ĐẢM DƯỚI BẤT KỲ HÌNH THỨC NÀO, RÕ RÀNG HOẶC
NGỤ Ý, BAO GỒM NHƯNG KHÔNG GIỚI HẠN ĐẢM BẢO VỀ KHẢ NĂNG BÁN,
PHÙ HỢP CHO MỘT MỤC ĐÍCH CỤ THỂ VÀ KHÔNG VI PHẠM. TRONG MỌI TRƯỜNG HỢP SẼ KHÔNG ĐƯỢC
TÁC GIẢ HOẶC NGƯỜI GIỮ BẢN QUYỀN PHẢI TRÁCH NHIỆM VỀ BẤT CỨ KHIẾU NẠI, THIỆT HẠI HOẶC KHÁC
TRÁCH NHIỆM PHÁP LÝ, CHO DÙ TRONG HÀNH ĐỘNG HỢP ĐỒNG, VIỆC LẠI HAY CÁC CÁCH KHÁC, PHÁT SINH TỪ,
NGOÀI HOẶC LIÊN QUAN ĐẾN PHẦN MỀM HOẶC VIỆC SỬ DỤNG HOẶC CÁC GIAO DỊCH KHÁC TRONG

## Examples For making Comamnds

```node.js
module.exports = {
  name: 'test',
  category: 'Test',
  execute: async (api, event, args, commands, prefix, admins, appState, sendMessage) => {
    const { threadID } = event;
    sendMessage(api, { threadID, message: 'This is a test command!' });
  },
};
```
## You can make an comamnd like this
```node.js
module.exports = {
  name: 'uptime',
  description: 'Shows the uptime of the bot.',
  author: 'Aljur Pogoy',
  usage: '/uptime',
  async execute(api, event, args, commands, prefix, admins, appState, sendMessage) {
    const { threadID } = event;
```
## To handle the non-prefix comamnd
```node.js
if (commandName === 'prefix' && commands.has('prefix')) {
        const command = commands.get('prefix');
```
## Put your uid in config.json
```node.js
{
  "admins": ["100073129302064","100080383844941","61560407754490"]
}
```
## Put your appstate on appstate.json file (recommend not to use your main account)
```node.js
{}
```

## To Run the Kagenou Bot, login first in [Render](render.com)
 ```
npm start or npm install
```
## Start Comamnd
```
node index.js
```

# Credits to ws3-fca 
ws3-fca [Click Here](https://www.npmjs.com/package/ws3-fca)
