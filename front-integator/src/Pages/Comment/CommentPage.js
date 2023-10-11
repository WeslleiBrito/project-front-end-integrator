import { useParams } from "react-router-dom";
import { useContext } from "react";
import { PostsContext } from "../../context/PostsContext";
import { Header } from "../../components/Header/Header";
import { Main, FormComment, InputContent, ButtonPost, ListComment, SectionPost } from "./commentStyle";
import { CommentIcon, Content, DisLike, Like, NameCreator, NumberComments, NumberLike, SectionLike } from '../../components/comment/CommentStyle';
import { Comment } from "../../components/comment/Comment";
import { goComment } from "../../Routes/coordinator";
import { useNavigate } from 'react-router-dom';

export const CommentPage = () => {
    const pathParams = useParams();
    const context = useContext(PostsContext)
    const { posts } = context
    const navigate = useNavigate()

    const post = posts.find((item) => item.id === pathParams.id)
 
    if(post){
        const { content, creator, like, dislike, amountComments, comments } = post
        return (
            <>
                <Header />
                <Main>
                    <SectionPost>
                        <NameCreator>{creator.name}</NameCreator>
                        <Content>{content}</Content>
                        <SectionLike>
                            <Like />
                            <NumberLike>{like - dislike}</NumberLike>
                            <DisLike />
                        </SectionLike>
                        <CommentIcon goComments={goComment} navigate={navigate} id={post.id}/>
                        <NumberComments>{amountComments}</NumberComments>
                    </SectionPost>
                    <FormComment>
                        <InputContent placeholder="Adicionar comentário" />
                        <ButtonPost/>
                    </FormComment>
                    <ListComment>
                        {
                            comments.map((comment) => {
                                return (
                                    <Comment key={comment.id} idComment={comment.id} idPost={post.id} name={creator.name} content={comment.content} numberLike={comment.like - comment.dislike} numberComment={comment.amountComments}/>
                                )
                            })
                        }
                    </ListComment>
                </Main>
            </>
        )
    }
    
} 