import marked from 'marked';
import { defaultRenderer, menuRenderer, navRenderer, cleanRenderer } from './Renderers';

export class MarkdownBuilder
{
    private _baseFolder : string;

    constructor(baseFolder: string)
    {
        this._baseFolder = baseFolder;

        marked.setOptions({
            renderer: defaultRenderer
        });
    }

    public BuildAll()
    {
        
    }
}