import axios from "axios";
import 'regenerator-runtime/runtime'
test("test", async () => {
  await axios.get('https://jsonplaceholder.typicode.com/posts/1').then((res) => {
    const { id, title, body } = res.data;
    expect(id).toBe(1);
    expect(title).toBe("sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
    expect(body).toBe("quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto");
  })
});
