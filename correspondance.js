var streamer = 'revingbell';

var correspondanceJson = JSON.parse(`
{
	"videos": [
		{
			"command": 	"societe",
			"file":		"societe.mp4",
			"delay": 	"60",
			"volume": 	"0.5"
		},
		{
			"command": 	"societe2",
			"file":		"societe.mp4",
			"delay": 	"60",
			"volume": 	"1"
		},
		{
			"command": 	"statistique",
			"file": 	"francois_billy_martingale.mp4",
			"delay": 	"30",
			"volume": 	"0.5"
		},
		{
			"command": 	"findumonde",
			"file": 	"fin_du_monde.mp4",
			"delay": 	"10",
			"volume": 	"0.5"
		}
	],
	"sounds": [
		{
			"command": 	"thereyouare",
			"file": 	"there_you_are.wav",
			"delay": 	"30",
			"volume": 	"0.5"
		}
	]
}
`);