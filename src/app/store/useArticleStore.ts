import { defineStore } from "pinia"
import { computed, Ref, ref } from 'vue';
import Article from "../types/typeArticle";

export const useArticleStore = defineStore('articles', () => {
    
    const articleList: Ref<Article[]> = ref([
        {
            _id: 0,
            title: "Вдохновение в каждом шаге",
            date: "9 Апр",
            reading_time: 2,
            teaser: "Наши путешественники находят вдохновение в каждом шаге своего пути.",
            comments: [
                {
                    _id: 0,
                    user: {
                        _id: 0,
                        name: "Мира Гусева",
                        photo: "/user/0/cover.png"
                    },
                    date: new Date(),
                    text: "Эти мгновения наполняют наши сердца радостью и любовью."
                }
            ],
            text: "Каждое утро, когда я просыпаюсь в палатке, окружённой лесом и горами, я чувствую, как природа наполняет меня энергией. Величественные вершины, покрытые зелёными лесами, напоминают мне о том, как важно сохранять связь с природой. Каждый шаг по тропе — это не просто движение вперёд, это путешествие внутрь себя, где я нахожу вдохновение и силу. В такие моменты я понимаю, что настоящая красота мира скрыта в его простоте и величии.",
            tags: [
                "Природа",
                "Люди"
            ]
            
        }
    ])
    const selectedTags: Ref<Array<string>> = ref([]);

    const tagList: Ref<Array<string>> = computed(()=>Array.from(new Set(articleList.value.flatMap(({ tags }) => tags))));

    return {
        articleList,
        selectedTags,
        tagList
    }
  })