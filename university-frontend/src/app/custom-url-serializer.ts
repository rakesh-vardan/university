import { DefaultUrlSerializer, UrlTree } from '@angular/router';

export class CustomUrlSerializer extends DefaultUrlSerializer {
  override parse(url: string): UrlTree {
    // Encode the URL before parsing it
    url = encodeURI(url);
    let tree = super.parse(url);

    // Decode the URL after parsing it
    tree.root.children['primary'].segments.forEach(segment => {
      segment.path = decodeURIComponent(segment.path);
    });

    return tree;
  }
}
