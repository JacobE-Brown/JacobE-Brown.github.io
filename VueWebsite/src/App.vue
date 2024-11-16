<script>
import smCard from "./components/smCard.vue";
import headerMenu from "./components/menu.vue";

export default {
    name: "App",
    components: {
        smCard,
        headerMenu,
    },
    data() {
        return {
            cards: [
                {
                    title: "Fausto",
                    button: "Visit",
                    content: "Seychelles card Soft",
                    postImage: "https://picsum.photos/300/101",
                },
                {
                    title: "Teagan",
                    button: "Visit",
                    content:
                        "Reprehenderit iste rerum quidem quibusdam quas minus occaecati voluptatem.",
                    postImage: "https://picsum.photos/300/100",
                },
                {
                    title: "Alfred",
                    button: "Visit",
                    content:
                        "Reprehenderit iste rerum quidem quibusdam quas minus occaecati voluptatem.",
                    postImage: "https://picsum.photos/300/102",
                },
                {
                    title: "Mariana",
                    button: "Visit",
                    content:
                        "Laboriosam veniam veritatis sunt tempora excepturi saepe minus aut aspernatur.",
                    postImage: "https://picsum.photos/300/99",
                },
                {
                    title: "Jasper",
                    button: "Visit",
                    content:
                        "Nihil sint repellendus debitis id velit molestias voluptatibus et veniam.",
                    postImage: "https://picsum.photos/300/105",
                },
                {
                    title: "Evelyn",
                    button: "Visit",
                    content:
                        "Voluptatem sit quia at itaque eveniet veniam provident fuga exercitationem.",
                    postImage: "https://picsum.photos/300/100",
                },
                {
                    title: "Liam",
                    button: "Visit",
                    content:
                        "Eius ut esse dolor quam vero nihil pariatur laborum molestias alias.",
                    postImage: "https://picsum.photos/300/100",
                },
                {
                    title: "Sophia",
                    button: "Visit",
                    content:
                        "Ducimus quasi labore aliquid vero pariatur mollitia ratione atque.",
                    postImage: "https://picsum.photos/300/100",
                },
                {
                    title: "Milo",
                    button: "Visit",
                    content:
                        "Sed ad et mollitia ipsum excepturi vel dolores. Ex impedit numquam.",
                    postImage: "https://picsum.photos/300/100",
                },
                {
                    title: "Isla",
                    button: "Visit",
                    content:
                        "Fugiat dolorum provident eligendi, quae nemo vero voluptatem deleniti.",
                    postImage: "https://picsum.photos/300/100",
                },
                {
                    title: "Kai",
                    button: "Visit",
                    content:
                        "Aut labore enim dolorem error, sit quidem explicabo sint temporibus.",
                    postImage: "https://picsum.photos/300/100",
                },
                {
                    title: "Zoey",
                    button: "Visit",
                    content:
                        "Nostrum deserunt dolorum accusamus quaerat voluptatibus sequi excepturi.",
                    postImage: "https://picsum.photos/300/100",
                },
                {
                    title: "Leo",
                    button: "Visit",
                    content:
                        "Dolore voluptatem distinctio rerum autem libero temporibus ut quaerat.",
                    postImage: "https://picsum.photos/300/100",
                },
            ],
        };
    },
};
</script>

<template>
    <div id="app">
        <div class="container">
            <div id="main-header">
                <div>
                    <headerMenu />
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <img src="https://picsum.photos/2000/300" alt="" class="pure-img" />
        </div>
        <div class="container">
            <div class="pure-g">
                <div id="main-page-content" class="pure-u-sm-1 pure-u-md-2-3">
                    <div class="container">
                        <h2>Welcome!</h2>
                        <p>
                            Molestiae provident tenetur sunt voluptas odit non.
                            Voluptatibus quasi sunt facilis laudantium libero
                            doloremque nihil dolore sed. Quas doloremque sed et
                            iusto odio saepe error vitae voluptas.
                        </p>

                        <p>
                            Similique quos delectus atque eum non sed animi
                            ratione. Aut nemo ipsam iste. Ut id et aut ipsum
                            culpa.
                        </p>

                        <p>
                            Mollitia eaque sed exercitationem aut maxime
                            possimus cum vel. Pariatur est ea dolores quam
                            inventore nulla. In quas quaerat suscipit
                            exercitationem laborum nihil consequatur corporis.
                            Placeat nam incidunt repudiandae deserunt vel fugiat
                            tempora eveniet pariatur. Non adipisci omnis.
                            Recusandae cum ea accusantium soluta.
                        </p>
                        <h3>Who We Are</h3>
                        <div>

                        </div>

                        <p>
                            Temporibus dicta temporibus. Molestiae iste et
                            consequuntur voluptatem aliquid commodi. Iste est et
                            eum tempora veniam alias ipsam.
                        </p>
                    </div>
                </div>
                <!-- Social Posts -->
                <div id="posts" class="pure-u-sm-1 pure-u-md-1-3">
                    <div>
                        <!-- Vue Element used to render social media cards from the cards array in data-->
                        <div
                            v-for="(card, index) in cards.slice(0, 5)"
                            :key="index"
                        >
                            <smCard>
                                <template #post-title>{{
                                    card.title
                                }}</template>
                                <template #post-button>{{
                                    card.button
                                }}</template>
                                <template #post-content>{{
                                    card.content
                                }}</template>
                                <template #post-image>
                                    <img
                                        :src="card.postImage"
                                        alt="Card image"
                                    />
                                </template>
                            </smCard>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>

<!-- <div v-for="(card, index) in cards.slice(0, 5)" :key="index">
  <smCard>
    <template #post-title>{{ card.title }}</template>
    <template #post-button>{{ card.button }}</template>
    <template #post-content>{{ card.content }}</template>
    <template #post-image>
      <img :src="card.postImage" alt="Card image" />
    </template>
  </smCard>
</div> -->
