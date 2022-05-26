import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as AuthActionCreators from '../store/actions/auth';


export const useAction = () => {
    const dispatch = useDispatch()
    return bindActionCreators(AuthActionCreators, dispatch)
}