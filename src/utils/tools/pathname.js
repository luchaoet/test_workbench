/**
 * 当前一级或二级菜单
 * 用于确定当前的菜单高亮，以及二级页面
 */
export default function pathname(b = 1) {
    let a = location.pathname.split('/');
    a.shift();
    return a[b-1] || '';
}