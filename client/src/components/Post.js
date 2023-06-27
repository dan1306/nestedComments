import { usePost } from "../contexts/PostContext"

export function Post() {
    const { post } = usePost()
    
    return (
        <>
            <h1>
                {post.title}
            </h1>
            <article>
                {post.body}
            </article>
            <h3 className="comments-title">
                comments
            </h3>
            <section>
                {/* {post.comments} */}
            </section>
        </>
    )
}