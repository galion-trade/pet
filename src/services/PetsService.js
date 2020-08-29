export default class PetsService {

    async getResponce(url = "https://api.jsonbin.io/b/5f4a3430514ec5112d10c2ab",
                      init = {
                          headers: {
                              'secret-key': '$2b$10$ZlXyJGPQsvBudiED3hPwBe9hEzCqDMstcHDkKkRviwzeUr5l7qntS'
                          }
                      }) {
        const res = await fetch(url, init);
        if (!res.ok) {
            throw new Error(`error: ${url}, status: ${res.status}`);
        }
        return await res.json();

    }

    getAllPets() {
        return this.getResponce();
    }


}




