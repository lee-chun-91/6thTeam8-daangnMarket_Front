import React from "react";
import post from "../redux/modules/post";
import { useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

const Modal = (props) => {
    const { open, close, header } = props;

    const dispatch = useDispatch();
    const token = localStorage?.getItem("token");
    const postId = props.postId;

    const deletePost =() => {
        dispatch(postActions.deletePost(token, postId));
    }
    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={open? 'openModal modal' : 'modal'}>
            {
                open? (
                    <section>
                        <header>
                            {header}
                            <button className="close" onClick={close}>&times;</button>
                        </header>
                        <main>
                            <button>수정하기</button>
                            <button onClick={()=>deletePost}>삭제하기</button>
                            {/* <button onClick={updatePost}>수정하기</button>
                            <button onClick={deletePost}>삭제하기</button> */}
                        </main>
                    </section>
                ) : null
            }
        </div>
    )
}
export default Modal;