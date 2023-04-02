'use strict';
(self.webpackChunkportfolio = self.webpackChunkportfolio || []).push([
	[229],
	{
		229: function (e, s, t) {
			t.r(s);
			var r = t(439),
				i = t(791),
				a = t(243),
				n = t(851),
				c = t(184);
			s.default = function () {
				var e = (0, i.useState)([]),
					s = (0, r.Z)(e, 2),
					t = s[0],
					o = s[1];
				(0, i.useEffect)(function () {
					a.Z.get(
						'https://res.cloudinary.com/dwyosqxlr/image/list/design.json'
					).then(function (e) {
						var s = e.data.resources;
						s = s.sort(function (e, s) {
							return -(e.created_at - s.created_at);
						});
						var t = [];
						s.forEach(function (e) {
							t.push(
								'https://res.cloudinary.com/dwyosqxlr/image/upload/v1680369628/' +
									e.public_id +
									'.' +
									e.format
							);
						}),
							o(t);
					});
				}, []);
				var l = (0, i.useState)(!1),
					u = (0, r.Z)(l, 2),
					d = u[0],
					f = u[1],
					m = (0, i.useState)(''),
					h = (0, r.Z)(m, 2),
					g = h[0],
					p = h[1];
				return (0, c.jsxs)('div', {
					className: 'design-gallery',
					children: [
						(0, c.jsxs)('div', {
							className: d ? 'model imgViewer' : 'model',
							children: [
								(0, c.jsx)('img', { src: g, alt: '' }),
								(0, c.jsx)('img', {
									onClick: function () {
										f(!1);
									},
									src: n,
									alt: '',
								}),
							],
						}),
						(0, c.jsx)('div', {
							className: 'designs scale-in-hor-right-no-delay',
							children: t.map(function (e, s) {
								return (0, c.jsx)(
									'div',
									{
										className: 'd-pics',
										onClick: function () {
											return p(e), void f(!0);
										},
										children: (0, c.jsx)('img', {
											src: e,
											alt: '',
											srcset: '',
										}),
									},
									s
								);
							}),
						}),
					],
				});
			};
		},
	},
]);
//# sourceMappingURL=229.c687cb9f.chunk.js.map
