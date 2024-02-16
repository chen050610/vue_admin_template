//小仓库
import {defineStore} from "pinia";


export let useLayOutSettingStore = defineStore('settingStore',{
    state:()=>{
        return {
            fold:false,//用于控股之菜单是折叠还是收起
            refsh:false,//用于控制刷新
        }
    }
})