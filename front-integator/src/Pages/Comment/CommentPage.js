import { useParams } from "react-router-dom";
import { useContext } from "react";
import { PostsContext } from "../../context/PostsContext";
import { Header } from "../../components/Header/Header";
import { Main, FormComment, InputContent, ButtonPost, ListComment, SectionPost } from "./commentStyle";
import { CommentIcon, Content, DisLike, Like, NameCreator, NumberComments, NumberLike, SectionLike } from '../../components/comment/CommentStyle';
import { Comment } from "../../components/comment/Comment";

export const CommentPage = () => {
    const pathParams = useParams();
    const context = useContext(PostsContext)
    const { posts } = context
    console.log(pathParams.id);
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
                        <CommentIcon />
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
                                    <Comment key={comment.id} id={comment.id} name={creator.name} content={comment.content} numberLike={comment.like - comment.dislike} numberComment={comment.amountComments}/>
                                )
                            })
                        }
                    </ListComment>
                </Main>
            </>
        )
    }
    
} 