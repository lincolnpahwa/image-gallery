import { helper } from '@ember/component/helper';
import { capitalize } from '@ember/string';

export function imageName(params /*, hash*/ ) {
  const [name] = params;

  if (name) {
    return name.split(' ').map(capitalize).join(' ').split('-').map(capitalize).join(' ');
  } else {
    return params;
  }
}

export default helper(imageName);
