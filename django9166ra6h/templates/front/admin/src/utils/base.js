const base = {
    get() {
        return {
            url : "http://localhost:8080/django9166ra6h/",
            name: "django9166ra6h",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于Python的智能房价分析与预测系统设计"
        } 
    }
}
export default base
