
export class ImageDataClass 
{
    type: 'base64' | 'url';
    imageData: BaseImage;

}

export class BaseImage {
    value: string;
    subtext?: string;
    subtextOverlay?: 'bottom' | 'half' | 'full';
    extension?: 'jpg' | 'jpeg' | 'png' | 'svg';
}