import{r as s,o,c as n,a as e,h as i,i as l,V as c}from"./index-6babca6c.js";const r=e("div",null,"Must know this HTML attributes tips....",-1),h={class:"flex flex-col gap-[4rem]"},p=l('<span class="flex flex-col"> You can use the accept attribute with the <input> element (only for file type) to specify the types of files a server can accept. <input type="file" accept=".jpg, .jpeg, .png"></span><span class="flex flex-col"> The autocomplete attribute can be used with the form, input and textarea elements to control the browser’s autocomplete feature. <input type="text" class="border-2 border-[red]" autocomplete="on"></span><span class="flex flex-col"> You can use the contenteditable attribute to specify whether the element’s content is editable or not. It allows users to modify the content within the element. This is a global attribute which means you can use this attribute with all HTML elements. <div contenteditable="true" class="border-2 border-[blue] p-2"> this is editable div </div></span><span class="flex flex-col"> You can use the download attribute with the element to specify that when a user clicks the link, the linked resource should be downloaded rather than navigated to. <a href="cv.pdf" download="cv.pdf"><button class="border-2 bg-[pink] p-2 rounded-md"> Download this CV </button></a></span>',4),u=["hidden"],d=l('<span class="flex flex-col"> The loading attribute can be used with the <img> element to control how the browser loads the image. It has three values: “eager,” “lazy,” and “auto.” <img src="'+c+'" class="h-[5rem] w-[4rem]" loading="lazy"></span><span class="flex flex-col"> The multiple attribute can be used with the input and select elements to allow users to select/enter multiple values at once. <div class="flex flex-col"><input type="file" multiple><br><select multiple><option value="apple">Apple</option><option value="banana">Banana</option><option value="cherry">Cherry</option><option value="date">Date</option></select></div></span>',2),x={__name:"htmlTemplates",setup(f){const t=s(!1);return(b,a)=>(o(),n("div",null,[r,e("div",h,[p,e("span",{class:"flex flex-col",onClick:a[0]||(a[0]=m=>t.value=!t.value)},[i(" You can use the 'hidden' attribute to hide the element on the web page. This is useful for controlling visibility through JavaScript or CSS. This is a global attribute. "),e("div",{hidden:t.value,class:"h-[2rem] bg-[blue] text-white"}," this is hidden ",8,u)]),d])]))}};export{x as default};
