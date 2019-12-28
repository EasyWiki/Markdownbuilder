import { Renderer } from "marked";

//#region Default
export const defaultRenderer = new Renderer({
    smartLists: true,
    smartypants: true
});

defaultRenderer.code = (code, lang, isEscaped) =>
{
    if(!isEscaped)
    {
        code = code.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    return "<pre class='line-numbers'><code class=' lang-" + lang + "'>" + code + "</code></pre>";
}

defaultRenderer.table = (header, body) =>
{
    return '<div class="scrollbox no-y"><table class="table is-striped">' + header + body + "</table></div>";
}

defaultRenderer.heading = (text, level, raw) =>
{
    let id = text.toLowerCase().replace(/[^\w]+/g, '-');
    const size = level + 1;
    if(size >= 7) level = 6;
    
    return "<h" + level + " id='" + id + "' class='title is-" + size + "'>" + text + "</h" + level + ">";
}

//#endregion

//#region Menu

export const menuRenderer = new Renderer({
    headerIds: false
});

menuRenderer.list = (body, ordered) =>
{
    return "<ul class='menu-list'>" + body + "</ul>";
}

menuRenderer.listitem = (text) =>
{
    return "<li>" + text + "</li>";
}

menuRenderer.paragraph = (text) =>
{
    return "<p class='menu-label'>" + text + "</p>";
}

menuRenderer.heading = (text, level, raw) =>
{
    return "<h1 class='title is-4'>" + text + "</h1>";
}

menuRenderer.br = () => "";

//#endregion

//#region Nav

export const navRenderer = new Renderer();

navRenderer.link = (href, title, text) =>
{
    return "<a class='navbar-item' href='" + href + "'>" + text + "</a>";
}

navRenderer.paragraph = (text) =>
{
    return text;
}

navRenderer.br = () => "";

//#endregion

//#region Clean

export const cleanRenderer = new Renderer();

cleanRenderer.code = function(code:string, lang:string){return code + " "};
cleanRenderer.blockquote = function(quote:string){return quote + " "};
cleanRenderer.html = () => "";
cleanRenderer.heading = function(text: string, level: number, raw:string){return text + " "};
cleanRenderer.hr = () => "";
cleanRenderer.list = function(body: string, ordered: boolean){return body + " "};
cleanRenderer.listitem = function(txt:string){return txt + " "};
cleanRenderer.paragraph = function(txt:string){return txt + " "};
cleanRenderer.table = function(txt:string,txt2:string){return txt2 + " "};
cleanRenderer.tablerow = function(txt:string){return txt + " "};
cleanRenderer.tablecell = function(txt:string,flags:object){return txt + " "};
cleanRenderer.strong = function(txt:string){return txt + " "};
cleanRenderer.em = function(txt:string){return txt + " "};
cleanRenderer.codespan = function(txt:string){return txt + " "};
cleanRenderer.br = () => "";
cleanRenderer.del = function(txt:string){return txt + " "};
cleanRenderer.link = function(txt:string,txt2:string,txt3:string){return txt3 + " "};
cleanRenderer.image = () => "";


//#endregion