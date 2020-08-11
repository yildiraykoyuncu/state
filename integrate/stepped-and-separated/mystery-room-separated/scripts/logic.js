const createClassNameTests = [
  { name: 'first', args: ['first'], expected: 'first-class' },
  { name: 'second', args: ['second'], expected: 'second-class' },
  { name: 'third', args: ['third'], expected: 'third-class' },
  { name: 'fourth', args: ['fourth'], expected: 'fourth-class' },
  { name: 'fifth', args: ['train'], expected: 'train-class' },
];

function updateClass(className, found) {
  if (className.indexOf('found') !== -1) {
    return className.split('hidden').join('');
  } else if (className.indexOf('hidden') === -1) {
    return className + ' hidden';
  } else {
    return className
  }
}

testing(createClassName, createClassNameTests);
