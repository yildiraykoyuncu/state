'use strict';

const expect = chai.expect;

/**
 * renders user objects into a list of users
 * @param {Object[]} arrOfUsers - array of user objects
 * @returns {HTMLUListElement}
 */
const renderAllUsers = (arrOfUsers, id, classList = []) => {
  const ulEl = document.createElement('ul');
  ulEl._ = _;
  for (const _ of _) {
    ulEl.classList.add(_);
  }

  for (const _ of _) {
    const liEl = document.createElement('li');
    liEl.innerHTML = `${_._}: ${_._}`;
    _.appendChild(_);
  };

  return ulEl;
};


describe('renderAllUsers: renders a list of user screen names and real names', () => {

  describe('2 users, id: "bots", 1 class', () => {
    const users = [
      {
        realName: 'Joel',
        screenName: 'JoeCamacho'
      },
      {
        realName: 'Ibrahim',
        screenName: 'idogrusoz'
      },
    ];
    const actual = renderAllUsers(users, 'bots', ['red-alert']);

    it('has tagName: "UL"', () => {
      expect(actual).to.have.property('tagName', 'UL');
    });
    it('has id: "bots"', () => {
      expect(actual).to.have.property('id', 'bots');
    });
    it('has classList length 1', () => {
      expect(actual.classList).to.have.length(1);
    });
    it('has className: "red-alert"', () => {
      expect(actual).to.have.property('className', 'red-alert');
    });
    it('has childElementCount: 2', () => {
      expect(actual).to.have.property('childElementCount', 2);
    });
    console.dir(actual);

    describe(`.children[0]`, () => {
      const actualChild = actual.children[0];
      it('has tagName: "LI"', () => {
        expect(actualChild).to.have.property('tagName', 'LI');
      });
      it('has text: "JoeCamacho: Joel"', () => {
        expect(actualChild).to.have.text('JoeCamacho: Joel');
      });
      it('has childElementCount: 0', () => {
        expect(actualChild).to.have.property('childElementCount', 0);
      });
      console.dir(actualChild);
    }, true);
    describe(`.children[1]`, () => {
      const actualChild = actual.children[1];
      it('has tagName: "LI"', () => {
        expect(actualChild).to.have.property('tagName', 'LI');
      });
      it('has text: "idogrusoz: Ibrahim"', () => {
        expect(actualChild).to.have.text('idogrusoz: Ibrahim');
      });
      it('has childElementCount: 0', () => {
        expect(actualChild).to.have.property('childElementCount', 0);
      });
      console.dir(actualChild);
    }, true);
  });

  describe('3 users, id: "super-users", 2 classes', () => {
    const users = [
      {
        realName: 'Mert',
        screenName: 'mert1980'
      },
      {
        realName: 'Ufuk',
        screenName: 'u-uysal'
      },
      {
        realName: 'Yavuz',
        screenName: 'yavuzugurtas'
      },
    ];
    const actual = renderAllUsers(users, 'super-users', ['alumni', 'hoverable']);

    it('has tagName: "UL"', () => {
      expect(actual).to.have.property('tagName', 'UL');
    });
    it('has id: "super-users"', () => {
      expect(actual).to.have.property('id', 'super-users');
    });
    it('has classList length 2', () => {
      expect(actual.classList).to.have.length(2);
    });
    it('has class: "alumni"', () => {
      expect(actual).to.have.class('alumni');
    });
    it('has class: "hoverable"', () => {
      expect(actual).to.have.class('hoverable');
    });
    it('has childElementCount: 3', () => {
      expect(actual).to.have.property('childElementCount', 3);
    });
    console.dir(actual);

    describe(`.children[0]`, () => {
      const actualChild = actual.children[0];
      it('has tagName: "LI"', () => {
        expect(actualChild).to.have.property('tagName', 'LI');
      });
      it('has text: "mert1980: Mert"', () => {
        expect(actualChild).to.have.text('mert1980: Mert');
      });
      it('has childElementCount: 0', () => {
        expect(actualChild).to.have.property('childElementCount', 0);
      });
      console.dir(actualChild);
    }, true);
    describe(`.children[1]`, () => {
      const actualChild = actual.children[1];
      it('has tagName: "LI"', () => {
        expect(actualChild).to.have.property('tagName', 'LI');
      });
      it('has text: "u-uysal: Ufuk"', () => {
        expect(actualChild).to.have.text('u-uysal: Ufuk');
      });
      it('has childElementCount: 0', () => {
        expect(actualChild).to.have.property('childElementCount', 0);
      });
      console.dir(actualChild);
    }, true);
    describe(`.children[2]`, () => {
      const actualChild = actual.children[2];
      it('has tagName: "LI"', () => {
        expect(actualChild).to.have.property('tagName', 'LI');
      });
      it('has text: "yavuzugurtas: Yavuz"', () => {
        expect(actualChild).to.have.text('yavuzugurtas: Yavuz');
      });
      it('has childElementCount: 0', () => {
        expect(actualChild).to.have.property('childElementCount', 0);
      });
      console.dir(actualChild);
    }, true);
  });

});
