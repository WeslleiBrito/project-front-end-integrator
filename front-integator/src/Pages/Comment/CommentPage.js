import { useParams } from "react-router-dom";
import { useContext } from "react";
import { PostsContext } from "../../context/PostsContext";
import { Header } from "../../components/Header/Header";
import { Main, FormComment, InputContent, ButtonPost, ListComment, SectionPost } from "./commentStyle";
import { CommentIcon, CommentSection, Content, DisLike, Like, NameCreator, NumberComments, NumberLike, SectionInterection, SectionLike } from '../../components/comment/CommentStyle';
import { Comment } from "../../components/comment/Comment";
import { goComment } from "../../Routes/coordinator";
import { useNavigate } from 'react-router-dom';
import { useForm } from "../../hooks/useForm";

export const CommentPage = () => {
    const pathParams = useParams();
    const context = useContext(PostsContext)
    const { posts, createComment, likeDislikePost, likeDislikeComment } = context
    const navigate = useNavigate()

    const [form, onChange, clearForm ] = useForm({ content: "" })

    if (posts.length > 0) {
        const post = posts.find((item) => item.id === pathParams.id)

        const { content, creator, like, dislike, amountComments, comments } = post
        
  
        return (
            <>
                <Header namePage="comment"/>
                <Main>
                    <SectionPost>
                        <NameCreator>{creator.name}</NameCreator>
                        <Content>{content}</Content>
                        <SectionInterection>
                            <SectionLike>
                                <Like likeDislike={likeDislikePost} id={pathParams.id} />
                                <NumberLike>{like - dislike >= 0 ? like - dislike : 0}</NumberLike>
                                <DisLike likeDislike={likeDislikePost} id={pathParams.id} />
                            </SectionLike>
                            <CommentSection>
                                <CommentIcon goComments={goComment} navigate={navigate} id={post.id} />
                                <NumberComments>{amountComments}</NumberComments>
                            </CommentSection>
                        </SectionInterection>
                    </SectionPost>
                    <FormComment onSubmit={async (event) => { await createComment(event, pathParams.id, form.content); clearForm()}}>
                        <InputContent placeholder="Adicionar comentário" id={post.id} name="content" onChange={onChange} value={form.content} />
                        <ButtonPost />
                    </FormComment>
                    <ListComment>
                        {
                            comments.map((comment) => {
                                return (
                                    <Comment key={comment.id}
                                        idComment={comment.id}
                                        idPost={post.id}
                                        name={creator.name}
                                        content={comment.content}
                                        numberLike={comment.like}
                                        numberComment={comment.amountComments}
                                        likeDislike={likeDislikeComment}
                                    />
                                )
                            })
                        }
                    </ListComment>
                </Main>
            </>
        )
    }

} 