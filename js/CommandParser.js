const input = 'npm install mhy --global --save-dev=false --foo=bar -s ignore';

function parse(input) {
	const inputArr = input.split(' ');
	return {
		bin: inputArr[0],
		commands: inputArr.filter((_, idx) => {
			if (!(idx === 0 || (_.includes('--') || _.includes('=')) || _.includes('-') || _ == 'ignore')) {
				return _;
			}
		}),
		flags: inputArr
			.filter(_ => {
				if (_.includes('--') || _.includes('=') || _.includes('-')) {
					return { _ };
				}
			})
			.map(_ => {
				if (_.startsWith('--') && !_.includes('=')) {
					return { [_.replace('--', '')]: true };
				} else if (_.startsWith('-') && !_.includes('=')) {
					return { [_.replace('-', '')]: true };
				} else {
                    let k = _.replace('--', '').replace('=',':')
                    if (k.includes('-')) {
                        const ind=k.indexOf('-');
                        return `${k.substr(0,ind)+k[ind+1].charAt(0).toUpperCase()+k.substr(ind+2)}`
                    } else {
                        return k
                    }
				}
			}),
	};
}

console.log('input command:-', input);
console.log('parse', parse(input));
