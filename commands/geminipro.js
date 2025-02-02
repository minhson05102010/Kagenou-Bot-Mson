const axios = require('axios');

module.exports = {
  name: 'geminipro',
  category: 'AI',
  execute: async (api, event, args, commands, prefix, admins, appState, sendMessage) => {
    const { threadID } = event;
    const query = args.join(" "); 

    if (query === "") {
      sendMessage(api, { threadID, message: "Hỏi gì hỏi cụ mày đi." });
      return;
    }

    try {
      const response = await axios.get(`https://kaiz-apis.gleeze.com/api/gemini-pro?q=${encodeURIComponent(query)}&uid=1`);
      const data = response.data; 

      if (data.response) {
        sendMessage(api, { threadID, message: data.response });
      } else {
        sendMessage(api, { threadID, message: "I'm sorry, Tao đéo thể trả lời. Hỏi gì khôn hơn đê địt cụ." });
      }
    } catch (error) {
      console.error("Error calling Gemini Pro API:", error);
      sendMessage(api, { threadID, message: "Đéo hiểu thay api đi địt cụ thằng lồn. Please try again later." });
    }
  },
};
                    
