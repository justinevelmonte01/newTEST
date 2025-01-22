function a(){
const a = ['a','c','d'];

c = 0;
a.forEach((element) => {
    const b = c++;
    //console.log(b);
    //console.log(element);
    console.log(a[b]);
});
}
a();
