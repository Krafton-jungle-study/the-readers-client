import React from "react";

export default function PdfExample() {
	return (
		<div>
			<div class="t m0 x1 h2 y1d ff1 fs0 fc0 sc0 ls0 ws0">
				•<span class="_ _8"> </span>
				<span class="ff5">
					Include<span class="_ _18"> </span>directive
				</span>
				:<span class="_ _a"> </span>it<span class="_"> </span>is<span class="_"> </span>used
				<span class="_"> </span>to
				<span class="_"> </span>include<span class="_"> </span>a<span class="_"> </span>ﬁle
				<span class="_"> </span>and
				<span class="_"> </span>merges<span class="_"> </span>the<span class="_"> </span>content
				<span class="_"> </span>
				of<span class="_"> </span>the<span class="_"> </span>ﬁle<span class="_"> </span>with
				<span class="_"> </span>the
				<span class="_"> </span>current<span class="_"> </span>page.
			</div>
			<div class="t m0 x1 h2 y263 ff1 fs0 fc0 sc0 ls0 ws0">
				•<span class="_ _8"> </span>
				<span class="ff5">
					Page<span class="_ _18"> </span>directive
				</span>
				:<span class="_ _a"> </span>it<span class="_"> </span>is<span class="_"> </span>used
				<span class="_"> </span>to
				<span class="_"> </span>deﬁne<span class="_"> </span>speciﬁc<span class="_"> </span>attributes
				<span class="_"> </span>in<span class="_"> </span>the<span class="_"> </span>JSP<span class="_"> </span>
				page,
				<span class="_"> </span>lik<span class="_ _0"></span>e<span class="_"> </span>error
				<span class="_"> </span>page
				<span class="_"> </span>and<span class="_"> </span>buf<span class="_ _0"></span>fer
				<span class="_ _0"></span>.
			</div>
			<div class="t m0 x1 h2 y264 ff1 fs0 fc0 sc0 ls0 ws0">
				•<span class="_ _8"> </span>
				<span class="ff5">Taglib</span>:<span class="_ _a"> </span>it<span class="_"> </span>is
				<span class="_"> </span>
				used<span class="_"> </span>to<span class="_"> </span>declare<span class="_"> </span>a<span class="_"> </span>
				custom<span class="_"> </span>tag<span class="_"> </span>library<span class="_"> </span>which
				<span class="_"> </span>is<span class="_"> </span>used<span class="_"> </span>in<span class="_"> </span>
				the
				<span class="_"> </span>page.
			</div>
			<div class="t m0 x1 h7 y265 ff3 fs4 fc0 sc0 ls0 ws0">
				12.5<span class="_ _30"> </span>What<span class="_"> </span>are<span class="_"> </span>JSP
				<span class="_"> </span>actions<span class="_"> </span>?
			</div>
			<div class="t m0 x1 h2 y266 ff1 fs0 fc0 sc0 ls0 ws0">
				JSP<span class="_ _a"> </span>actions<span class="_ _a"> </span>use<span class="_ _a"> </span>constructs
				<span class="_ _a"> </span>in<span class="_ _a"> </span>XML<span class="_ _a"> </span>syntax
				<span class="_ _a"> </span>to<span class="_ _a"> </span>control<span class="_ _a"> </span>the
				<span class="_ _a"> </span>behavior<span class="_ _a"> </span>of<span class="_ _a"> </span>the
				<span class="_ _a"> </span>servlet<span class="_ _a"> </span>engine.<span class="_ _8"> </span>JSP
				<span class="_ _a"> </span>actions<span class="_ _a"> </span>are<span class="_ _a"> </span>executed
				<span class="_ _24"> </span>when<span class="_ _a"> </span>a<span class="_ _13"> </span>JSP
			</div>
			<div class="t m0 x1 h2 y267 ff1 fs0 fc0 sc0 ls0 ws0">
				page<span class="_"> </span>is<span class="_"> </span>requested.<span class="_ _a"> </span>They
				<span class="_"> </span>can<span class="_"> </span>be<span class="_"> </span>dynamically
				<span class="_ _24"> </span>inserted<span class="_"> </span>into<span class="_"> </span>a
				<span class="_"> </span>ﬁle,<span class="_"> </span>re-use<span class="_"> </span>JavaBeans
				<span class="_"> </span>components,<span class="_"> </span>forward<span class="_"> </span>the
				<span class="_"> </span>user<span class="_"> </span>to<span class="_"> </span>another
				<span class="_"> </span>
				page,
			</div>
			<div class="t m0 x1 h2 y268 ff1 fs0 fc0 sc0 ls0 ws0">
				or<span class="_"> </span>generate<span class="_"> </span>HTML<span class="_"> </span>for
				<span class="_"> </span>the<span class="_"> </span>Jav<span class="_ _0"></span>a<span class="_"> </span>
				plugin.Some<span class="_"> </span>of<span class="_"> </span>the<span class="_"> </span>av
				<span class="_ _0"></span>ailable<span class="_"> </span>actions<span class="_"> </span>are
				<span class="_"> </span>listed<span class="_"> </span>below:
			</div>
			<div class="t m0 x1 h2 y269 ff1 fs0 fc0 sc0 ls0 ws0">
				•<span class="_ _8"> </span>
				<span class="ff5">
					jsp:include<span class="_ _4"> </span>
				</span>
				-<span class="_"> </span>includes<span class="_"> </span>a<span class="_"> </span>ﬁle,
				<span class="_"> </span>
				when<span class="_"> </span>the<span class="_"> </span>JSP<span class="_"> </span>page
				<span class="_"> </span>is
				<span class="_"> </span>requested.
			</div>
			<div class="t m0 x1 h2 y26a ff1 fs0 fc0 sc0 ls0 ws0">
				•<span class="_ _8"> </span>
				<span class="ff5">
					jsp:useBean<span class="_ _4"> </span>
				</span>
				-<span class="_"> </span>ﬁnds<span class="_"> </span>or<span class="_"> </span>instantiates
				<span class="_"> </span>a<span class="_"> </span>Jav<span class="_ _0"></span>aBean.
			</div>
			<div class="t m0 x1 h2 y26b ff1 fs0 fc0 sc0 ls0 ws0">
				•<span class="_ _8"> </span>
				<span class="ff5">
					jsp:setProperty<span class="_ _4"> </span>
				</span>
				-<span class="_"> </span>sets<span class="_"> </span>the<span class="_"> </span>property
				<span class="_"> </span>
				of<span class="_"> </span>a<span class="_"> </span>Jav<span class="_ _0"></span>aBean.
			</div>
			<div class="t m0 x1 h2 y26c ff1 fs0 fc0 sc0 ls0 ws0">
				•<span class="_ _8"> </span>
				<span class="ff5">
					jsp:getProperty<span class="_ _4"> </span>
				</span>
				-<span class="_"> </span>gets<span class="_"> </span>the<span class="_"> </span>property
				<span class="_"> </span>
				of<span class="_"> </span>a<span class="_"> </span>Jav<span class="_ _0"></span>aBean.
			</div>
			<div class="t m0 x1 h2 y26d ff1 fs0 fc0 sc0 ls0 ws0">
				•<span class="_ _8"> </span>
				<span class="ff5">
					jsp:forward<span class="_ _4"> </span>
				</span>
				-<span class="_"> </span>forwards<span class="_"> </span>the<span class="_"> </span>requester
				<span class="_"> </span>to<span class="_"> </span>a<span class="_"> </span>ne<span class="_ _0"></span>w
				<span class="_"> </span>page.
			</div>
			<div class="t m0 x1 h2 y26e ff1 fs0 fc0 sc0 ls0 ws0">
				•<span class="_ _8"> </span>
				<span class="ff5">
					jsp:plugin<span class="_ _4"> </span>
				</span>
				-<span class="_"> </span>generates<span class="_"> </span>browser<span class="_ _0"></span>-speciﬁc
				<span class="_"> </span>code.
			</div>
			<div class="t m0 x1 h7 y26f ff3 fs4 fc0 sc0 ls0 ws0">
				12.6<span class="_ _30"> </span>What<span class="_"> </span>are<span class="_"> </span>Scriptlets
				<span class="_"> </span>?
			</div>
			<div class="t m0 x1 h2 y270 ff1 fs0 fc0 sc0 ls0 ws0">
				In<span class="_ _a"> </span>Jav<span class="_ _0"></span>a<span class="_ _24"> </span>Server
				<span class="_ _a"> </span>Pages<span class="_ _24"> </span>(JSP)<span class="_ _a"> </span>technology
				<span class="_ _0"></span>,<span class="_ _a"> </span>a<span class="_ _a"> </span>scriptlet
				<span class="_ _a"> </span>is<span class="_ _a"> </span>a<span class="_ _24"> </span>piece
				<span class="_ _a"> </span>of<span class="_ _a"> </span>Jav<span class="_ _0"></span>a-code
				<span class="_ _a"> </span>embedded<span class="_ _a"> </span>in<span class="_ _a"> </span>a
				<span class="_ _a"> </span>JSP<span class="_ _a"> </span>page.<span class="_ _17"> </span>The
				<span class="_ _a"> </span>scriptlet<span class="_ _a"> </span>is<span class="_ _a"> </span>e
				<span class="_ _0"></span>verything
			</div>
			<div class="t m0 x1 h2 y271 ff1 fs0 fc0 sc0 ls0 ws0">
				inside<span class="_"> </span>the<span class="_"> </span>tags.<span class="_ _a"> </span>Between
				<span class="_"> </span>these<span class="_"> </span>tags,<span class="_"> </span>a<span class="_"> </span>user
				<span class="_"> </span>can<span class="_"> </span>add<span class="_"> </span>any
				<span class="_"> </span>v<span class="_ _0"></span>alid<span class="_"> </span>scriplet.
			</div>
			<div class="t m0 x1 h7 y272 ff3 fs4 fc0 sc0 ls0 ws0">
				12.7<span class="_ _30"> </span>What<span class="_"> </span>are<span class="_"> </span>Decalarations
				<span class="_"> </span>?
			</div>
			<div class="t m0 x1 h2 y273 ff1 fs0 fc0 sc0 ls0 ws0">
				Declarations<span class="_"> </span>are<span class="_"> </span>similar<span class="_"> </span>to
				<span class="_"> </span>variable<span class="_"> </span>declarations<span class="_"> </span>in
				<span class="_"> </span>Ja<span class="_ _0"></span>va.<span class="_ _24"> </span>Declarations
				<span class="_"> </span>are<span class="_"> </span>used<span class="_ _24"> </span>to
				<span class="_"> </span>
				declare<span class="_"> </span>variables<span class="_"> </span>for<span class="_"> </span>subsequent
				<span class="_"> </span>use<span class="_"> </span>in<span class="_"> </span>e<span class="_ _0"></span>
				xpres-
			</div>
			<div class="t m0 x1 h2 y1d ff1 fs0 fc0 sc0 ls0 ws0">
				•<span class="_ _8"> </span>
				<span class="ff5">
					Include<span class="_ _18"> </span>directive
				</span>
				:<span class="_ _a"> </span>it<span class="_"> </span>is<span class="_"> </span>used
				<span class="_"> </span>to
				<span class="_"> </span>include<span class="_"> </span>a<span class="_"> </span>ﬁle
				<span class="_"> </span>and
				<span class="_"> </span>merges<span class="_"> </span>the<span class="_"> </span>content
				<span class="_"> </span>
				of<span class="_"> </span>the<span class="_"> </span>ﬁle<span class="_"> </span>with
				<span class="_"> </span>the
				<span class="_"> </span>current<span class="_"> </span>page.
			</div>
			<div class="t m0 x1 h2 y263 ff1 fs0 fc0 sc0 ls0 ws0">
				•<span class="_ _8"> </span>
				<span class="ff5">
					Page<span class="_ _18"> </span>directive
				</span>
				:<span class="_ _a"> </span>it<span class="_"> </span>is<span class="_"> </span>used
				<span class="_"> </span>to
				<span class="_"> </span>deﬁne<span class="_"> </span>speciﬁc<span class="_"> </span>attributes
				<span class="_"> </span>in<span class="_"> </span>the<span class="_"> </span>JSP<span class="_"> </span>
				page,
				<span class="_"> </span>lik<span class="_ _0"></span>e<span class="_"> </span>error
				<span class="_"> </span>page
				<span class="_"> </span>and<span class="_"> </span>buf<span class="_ _0"></span>fer
				<span class="_ _0"></span>.
			</div>
			<div class="t m0 x1 h2 y264 ff1 fs0 fc0 sc0 ls0 ws0">
				•<span class="_ _8"> </span>
				<span class="ff5">Taglib</span>:<span class="_ _a"> </span>it<span class="_"> </span>is
				<span class="_"> </span>
				used<span class="_"> </span>to<span class="_"> </span>declare<span class="_"> </span>a<span class="_"> </span>
				custom<span class="_"> </span>tag<span class="_"> </span>library<span class="_"> </span>which
				<span class="_"> </span>is<span class="_"> </span>used<span class="_"> </span>in<span class="_"> </span>
				the
				<span class="_"> </span>page.
			</div>
			<div class="t m0 x1 h7 y265 ff3 fs4 fc0 sc0 ls0 ws0">
				12.5<span class="_ _30"> </span>What<span class="_"> </span>are<span class="_"> </span>JSP
				<span class="_"> </span>actions<span class="_"> </span>?
			</div>
			<div class="t m0 x1 h2 y266 ff1 fs0 fc0 sc0 ls0 ws0">
				JSP<span class="_ _a"> </span>actions<span class="_ _a"> </span>use<span class="_ _a"> </span>constructs
				<span class="_ _a"> </span>in<span class="_ _a"> </span>XML<span class="_ _a"> </span>syntax
				<span class="_ _a"> </span>to<span class="_ _a"> </span>control<span class="_ _a"> </span>the
				<span class="_ _a"> </span>behavior<span class="_ _a"> </span>of<span class="_ _a"> </span>the
				<span class="_ _a"> </span>servlet<span class="_ _a"> </span>engine.<span class="_ _8"> </span>JSP
				<span class="_ _a"> </span>actions<span class="_ _a"> </span>are<span class="_ _a"> </span>executed
				<span class="_ _24"> </span>when<span class="_ _a"> </span>a<span class="_ _13"> </span>JSP
			</div>
			<div class="t m0 x1 h2 y267 ff1 fs0 fc0 sc0 ls0 ws0">
				page<span class="_"> </span>is<span class="_"> </span>requested.<span class="_ _a"> </span>They
				<span class="_"> </span>can<span class="_"> </span>be<span class="_"> </span>dynamically
				<span class="_ _24"> </span>inserted<span class="_"> </span>into<span class="_"> </span>a
				<span class="_"> </span>ﬁle,<span class="_"> </span>re-use<span class="_"> </span>JavaBeans
				<span class="_"> </span>components,<span class="_"> </span>forward<span class="_"> </span>the
				<span class="_"> </span>user<span class="_"> </span>to<span class="_"> </span>another
				<span class="_"> </span>
				page,
			</div>
			<div class="t m0 x1 h2 y268 ff1 fs0 fc0 sc0 ls0 ws0">
				or<span class="_"> </span>generate<span class="_"> </span>HTML<span class="_"> </span>for
				<span class="_"> </span>the<span class="_"> </span>Jav<span class="_ _0"></span>a<span class="_"> </span>
				plugin.Some<span class="_"> </span>of<span class="_"> </span>the<span class="_"> </span>av
				<span class="_ _0"></span>ailable<span class="_"> </span>actions<span class="_"> </span>are
				<span class="_"> </span>listed<span class="_"> </span>below:
			</div>
			<div class="t m0 x1 h2 y269 ff1 fs0 fc0 sc0 ls0 ws0">
				•<span class="_ _8"> </span>
				<span class="ff5">
					jsp:include<span class="_ _4"> </span>
				</span>
				-<span class="_"> </span>includes<span class="_"> </span>a<span class="_"> </span>ﬁle,
				<span class="_"> </span>
				when<span class="_"> </span>the<span class="_"> </span>JSP<span class="_"> </span>page
				<span class="_"> </span>is
				<span class="_"> </span>requested.
			</div>
			<div class="t m0 x1 h2 y26a ff1 fs0 fc0 sc0 ls0 ws0">
				•<span class="_ _8"> </span>
				<span class="ff5">
					jsp:useBean<span class="_ _4"> </span>
				</span>
				-<span class="_"> </span>ﬁnds<span class="_"> </span>or<span class="_"> </span>instantiates
				<span class="_"> </span>a<span class="_"> </span>Jav<span class="_ _0"></span>aBean.
			</div>
			<div class="t m0 x1 h2 y26b ff1 fs0 fc0 sc0 ls0 ws0">
				•<span class="_ _8"> </span>
				<span class="ff5">
					jsp:setProperty<span class="_ _4"> </span>
				</span>
				-<span class="_"> </span>sets<span class="_"> </span>the<span class="_"> </span>property
				<span class="_"> </span>
				of<span class="_"> </span>a<span class="_"> </span>Jav<span class="_ _0"></span>aBean.
			</div>
			<div class="t m0 x1 h2 y26c ff1 fs0 fc0 sc0 ls0 ws0">
				•<span class="_ _8"> </span>
				<span class="ff5">
					jsp:getProperty<span class="_ _4"> </span>
				</span>
				-<span class="_"> </span>gets<span class="_"> </span>the<span class="_"> </span>property
				<span class="_"> </span>
				of<span class="_"> </span>a<span class="_"> </span>Jav<span class="_ _0"></span>aBean.
			</div>
			<div class="t m0 x1 h2 y26d ff1 fs0 fc0 sc0 ls0 ws0">
				•<span class="_ _8"> </span>
				<span class="ff5">
					jsp:forward<span class="_ _4"> </span>
				</span>
				-<span class="_"> </span>forwards<span class="_"> </span>the<span class="_"> </span>requester
				<span class="_"> </span>to<span class="_"> </span>a<span class="_"> </span>ne<span class="_ _0"></span>w
				<span class="_"> </span>page.
			</div>
			<div class="t m0 x1 h2 y26e ff1 fs0 fc0 sc0 ls0 ws0">
				•<span class="_ _8"> </span>
				<span class="ff5">
					jsp:plugin<span class="_ _4"> </span>
				</span>
				-<span class="_"> </span>generates<span class="_"> </span>browser<span class="_ _0"></span>-speciﬁc
				<span class="_"> </span>code.
			</div>
			<div class="t m0 x1 h7 y26f ff3 fs4 fc0 sc0 ls0 ws0">
				12.6<span class="_ _30"> </span>What<span class="_"> </span>are<span class="_"> </span>Scriptlets
				<span class="_"> </span>?
			</div>
			<div class="t m0 x1 h2 y270 ff1 fs0 fc0 sc0 ls0 ws0">
				In<span class="_ _a"> </span>Jav<span class="_ _0"></span>a<span class="_ _24"> </span>Server
				<span class="_ _a"> </span>Pages<span class="_ _24"> </span>(JSP)<span class="_ _a"> </span>technology
				<span class="_ _0"></span>,<span class="_ _a"> </span>a<span class="_ _a"> </span>scriptlet
				<span class="_ _a"> </span>is<span class="_ _a"> </span>a<span class="_ _24"> </span>piece
				<span class="_ _a"> </span>of<span class="_ _a"> </span>Jav<span class="_ _0"></span>a-code
				<span class="_ _a"> </span>embedded<span class="_ _a"> </span>in<span class="_ _a"> </span>a
				<span class="_ _a"> </span>JSP<span class="_ _a"> </span>page.<span class="_ _17"> </span>The
				<span class="_ _a"> </span>scriptlet<span class="_ _a"> </span>is<span class="_ _a"> </span>e
				<span class="_ _0"></span>verything
			</div>
			<div class="t m0 x1 h2 y271 ff1 fs0 fc0 sc0 ls0 ws0">
				inside<span class="_"> </span>the<span class="_"> </span>tags.<span class="_ _a"> </span>Between
				<span class="_"> </span>these<span class="_"> </span>tags,<span class="_"> </span>a<span class="_"> </span>user
				<span class="_"> </span>can<span class="_"> </span>add<span class="_"> </span>any
				<span class="_"> </span>v<span class="_ _0"></span>alid<span class="_"> </span>scriplet.
			</div>
			<div class="t m0 x1 h7 y272 ff3 fs4 fc0 sc0 ls0 ws0">
				12.7<span class="_ _30"> </span>What<span class="_"> </span>are<span class="_"> </span>Decalarations
				<span class="_"> </span>?
			</div>
			<div class="t m0 x1 h2 y273 ff1 fs0 fc0 sc0 ls0 ws0">
				Declarations<span class="_"> </span>are<span class="_"> </span>similar<span class="_"> </span>to
				<span class="_"> </span>variable<span class="_"> </span>declarations<span class="_"> </span>in
				<span class="_"> </span>Ja<span class="_ _0"></span>va.<span class="_ _24"> </span>Declarations
				<span class="_"> </span>are<span class="_"> </span>used<span class="_ _24"> </span>to
				<span class="_"> </span>
				declare<span class="_"> </span>variables<span class="_"> </span>for<span class="_"> </span>subsequent
				<span class="_"> </span>use<span class="_"> </span>in<span class="_"> </span>e<span class="_ _0"></span>
				xpres-
			</div>
			<div class="t m0 x1 h2 y1d ff1 fs0 fc0 sc0 ls0 ws0">
				•<span class="_ _8"> </span>
				<span class="ff5">
					Include<span class="_ _18"> </span>directive
				</span>
				:<span class="_ _a"> </span>it<span class="_"> </span>is<span class="_"> </span>used
				<span class="_"> </span>to
				<span class="_"> </span>include<span class="_"> </span>a<span class="_"> </span>ﬁle
				<span class="_"> </span>and
				<span class="_"> </span>merges<span class="_"> </span>the<span class="_"> </span>content
				<span class="_"> </span>
				of<span class="_"> </span>the<span class="_"> </span>ﬁle<span class="_"> </span>with
				<span class="_"> </span>the
				<span class="_"> </span>current<span class="_"> </span>page.
			</div>
			<div class="t m0 x1 h2 y263 ff1 fs0 fc0 sc0 ls0 ws0">
				•<span class="_ _8"> </span>
				<span class="ff5">
					Page<span class="_ _18"> </span>directive
				</span>
				:<span class="_ _a"> </span>it<span class="_"> </span>is<span class="_"> </span>used
				<span class="_"> </span>to
				<span class="_"> </span>deﬁne<span class="_"> </span>speciﬁc<span class="_"> </span>attributes
				<span class="_"> </span>in<span class="_"> </span>the<span class="_"> </span>JSP<span class="_"> </span>
				page,
				<span class="_"> </span>lik<span class="_ _0"></span>e<span class="_"> </span>error
				<span class="_"> </span>page
				<span class="_"> </span>and<span class="_"> </span>buf<span class="_ _0"></span>fer
				<span class="_ _0"></span>.
			</div>
			<div class="t m0 x1 h2 y264 ff1 fs0 fc0 sc0 ls0 ws0">
				•<span class="_ _8"> </span>
				<span class="ff5">Taglib</span>:<span class="_ _a"> </span>it<span class="_"> </span>is
				<span class="_"> </span>
				used<span class="_"> </span>to<span class="_"> </span>declare<span class="_"> </span>a<span class="_"> </span>
				custom<span class="_"> </span>tag<span class="_"> </span>library<span class="_"> </span>which
				<span class="_"> </span>is<span class="_"> </span>used<span class="_"> </span>in<span class="_"> </span>
				the
				<span class="_"> </span>page.
			</div>
			<div class="t m0 x1 h7 y265 ff3 fs4 fc0 sc0 ls0 ws0">
				12.5<span class="_ _30"> </span>What<span class="_"> </span>are<span class="_"> </span>JSP
				<span class="_"> </span>actions<span class="_"> </span>?
			</div>
			<div class="t m0 x1 h2 y266 ff1 fs0 fc0 sc0 ls0 ws0">
				JSP<span class="_ _a"> </span>actions<span class="_ _a"> </span>use<span class="_ _a"> </span>constructs
				<span class="_ _a"> </span>in<span class="_ _a"> </span>XML<span class="_ _a"> </span>syntax
				<span class="_ _a"> </span>to<span class="_ _a"> </span>control<span class="_ _a"> </span>the
				<span class="_ _a"> </span>behavior<span class="_ _a"> </span>of<span class="_ _a"> </span>the
				<span class="_ _a"> </span>servlet<span class="_ _a"> </span>engine.<span class="_ _8"> </span>JSP
				<span class="_ _a"> </span>actions<span class="_ _a"> </span>are<span class="_ _a"> </span>executed
				<span class="_ _24"> </span>when<span class="_ _a"> </span>a<span class="_ _13"> </span>JSP
			</div>
			<div class="t m0 x1 h2 y267 ff1 fs0 fc0 sc0 ls0 ws0">
				page<span class="_"> </span>is<span class="_"> </span>requested.<span class="_ _a"> </span>They
				<span class="_"> </span>can<span class="_"> </span>be<span class="_"> </span>dynamically
				<span class="_ _24"> </span>inserted<span class="_"> </span>into<span class="_"> </span>a
				<span class="_"> </span>ﬁle,<span class="_"> </span>re-use<span class="_"> </span>JavaBeans
				<span class="_"> </span>components,<span class="_"> </span>forward<span class="_"> </span>the
				<span class="_"> </span>user<span class="_"> </span>to<span class="_"> </span>another
				<span class="_"> </span>
				page,
			</div>
			<div class="t m0 x1 h2 y268 ff1 fs0 fc0 sc0 ls0 ws0">
				or<span class="_"> </span>generate<span class="_"> </span>HTML<span class="_"> </span>for
				<span class="_"> </span>the<span class="_"> </span>Jav<span class="_ _0"></span>a<span class="_"> </span>
				plugin.Some<span class="_"> </span>of<span class="_"> </span>the<span class="_"> </span>av
				<span class="_ _0"></span>ailable<span class="_"> </span>actions<span class="_"> </span>are
				<span class="_"> </span>listed<span class="_"> </span>below:
			</div>
			<div class="t m0 x1 h2 y269 ff1 fs0 fc0 sc0 ls0 ws0">
				•<span class="_ _8"> </span>
				<span class="ff5">
					jsp:include<span class="_ _4"> </span>
				</span>
				-<span class="_"> </span>includes<span class="_"> </span>a<span class="_"> </span>ﬁle,
				<span class="_"> </span>
				when<span class="_"> </span>the<span class="_"> </span>JSP<span class="_"> </span>page
				<span class="_"> </span>is
				<span class="_"> </span>requested.
			</div>
			<div class="t m0 x1 h2 y26a ff1 fs0 fc0 sc0 ls0 ws0">
				•<span class="_ _8"> </span>
				<span class="ff5">
					jsp:useBean<span class="_ _4"> </span>
				</span>
				-<span class="_"> </span>ﬁnds<span class="_"> </span>or<span class="_"> </span>instantiates
				<span class="_"> </span>a<span class="_"> </span>Jav<span class="_ _0"></span>aBean.
			</div>
			<div class="t m0 x1 h2 y26b ff1 fs0 fc0 sc0 ls0 ws0">
				•<span class="_ _8"> </span>
				<span class="ff5">
					jsp:setProperty<span class="_ _4"> </span>
				</span>
				-<span class="_"> </span>sets<span class="_"> </span>the<span class="_"> </span>property
				<span class="_"> </span>
				of<span class="_"> </span>a<span class="_"> </span>Jav<span class="_ _0"></span>aBean.
			</div>
			<div class="t m0 x1 h2 y26c ff1 fs0 fc0 sc0 ls0 ws0">
				•<span class="_ _8"> </span>
				<span class="ff5">
					jsp:getProperty<span class="_ _4"> </span>
				</span>
				-<span class="_"> </span>gets<span class="_"> </span>the<span class="_"> </span>property
				<span class="_"> </span>
				of<span class="_"> </span>a<span class="_"> </span>Jav<span class="_ _0"></span>aBean.
			</div>
			<div class="t m0 x1 h2 y26d ff1 fs0 fc0 sc0 ls0 ws0">
				•<span class="_ _8"> </span>
				<span class="ff5">
					jsp:forward<span class="_ _4"> </span>
				</span>
				-<span class="_"> </span>forwards<span class="_"> </span>the<span class="_"> </span>requester
				<span class="_"> </span>to<span class="_"> </span>a<span class="_"> </span>ne<span class="_ _0"></span>w
				<span class="_"> </span>page.
			</div>
			<div class="t m0 x1 h2 y26e ff1 fs0 fc0 sc0 ls0 ws0">
				•<span class="_ _8"> </span>
				<span class="ff5">
					jsp:plugin<span class="_ _4"> </span>
				</span>
				-<span class="_"> </span>generates<span class="_"> </span>browser<span class="_ _0"></span>-speciﬁc
				<span class="_"> </span>code.
			</div>
			<div class="t m0 x1 h7 y26f ff3 fs4 fc0 sc0 ls0 ws0">
				12.6<span class="_ _30"> </span>What<span class="_"> </span>are<span class="_"> </span>Scriptlets
				<span class="_"> </span>?
			</div>
			<div class="t m0 x1 h2 y270 ff1 fs0 fc0 sc0 ls0 ws0">
				In<span class="_ _a"> </span>Jav<span class="_ _0"></span>a<span class="_ _24"> </span>Server
				<span class="_ _a"> </span>Pages<span class="_ _24"> </span>(JSP)<span class="_ _a"> </span>technology
				<span class="_ _0"></span>,<span class="_ _a"> </span>a<span class="_ _a"> </span>scriptlet
				<span class="_ _a"> </span>is<span class="_ _a"> </span>a<span class="_ _24"> </span>piece
				<span class="_ _a"> </span>of<span class="_ _a"> </span>Jav<span class="_ _0"></span>a-code
				<span class="_ _a"> </span>embedded<span class="_ _a"> </span>in<span class="_ _a"> </span>a
				<span class="_ _a"> </span>JSP<span class="_ _a"> </span>page.<span class="_ _17"> </span>The
				<span class="_ _a"> </span>scriptlet<span class="_ _a"> </span>is<span class="_ _a"> </span>e
				<span class="_ _0"></span>verything
			</div>
			<div class="t m0 x1 h2 y271 ff1 fs0 fc0 sc0 ls0 ws0">
				inside<span class="_"> </span>the<span class="_"> </span>tags.<span class="_ _a"> </span>Between
				<span class="_"> </span>these<span class="_"> </span>tags,<span class="_"> </span>a<span class="_"> </span>user
				<span class="_"> </span>can<span class="_"> </span>add<span class="_"> </span>any
				<span class="_"> </span>v<span class="_ _0"></span>alid<span class="_"> </span>scriplet.
			</div>
			<div class="t m0 x1 h7 y272 ff3 fs4 fc0 sc0 ls0 ws0">
				12.7<span class="_ _30"> </span>What<span class="_"> </span>are<span class="_"> </span>Decalarations
				<span class="_"> </span>?
			</div>
			<div class="t m0 x1 h2 y273 ff1 fs0 fc0 sc0 ls0 ws0">
				Declarations<span class="_"> </span>are<span class="_"> </span>similar<span class="_"> </span>to
				<span class="_"> </span>variable<span class="_"> </span>declarations<span class="_"> </span>in
				<span class="_"> </span>Ja<span class="_ _0"></span>va.<span class="_ _24"> </span>Declarations
				<span class="_"> </span>are<span class="_"> </span>used<span class="_ _24"> </span>to
				<span class="_"> </span>
				declare<span class="_"> </span>variables<span class="_"> </span>for<span class="_"> </span>subsequent
				<span class="_"> </span>use<span class="_"> </span>in<span class="_"> </span>e<span class="_ _0"></span>
				xpres-
			</div>
			<div class="t m0 x1 h2 y1d ff1 fs0 fc0 sc0 ls0 ws0">
				•<span class="_ _8"> </span>
				<span class="ff5">
					Include<span class="_ _18"> </span>directive
				</span>
				:<span class="_ _a"> </span>it<span class="_"> </span>is<span class="_"> </span>used
				<span class="_"> </span>to
				<span class="_"> </span>include<span class="_"> </span>a<span class="_"> </span>ﬁle
				<span class="_"> </span>and
				<span class="_"> </span>merges<span class="_"> </span>the<span class="_"> </span>content
				<span class="_"> </span>
				of<span class="_"> </span>the<span class="_"> </span>ﬁle<span class="_"> </span>with
				<span class="_"> </span>the
				<span class="_"> </span>current<span class="_"> </span>page.
			</div>
			<div class="t m0 x1 h2 y263 ff1 fs0 fc0 sc0 ls0 ws0">
				•<span class="_ _8"> </span>
				<span class="ff5">
					Page<span class="_ _18"> </span>directive
				</span>
				:<span class="_ _a"> </span>it<span class="_"> </span>is<span class="_"> </span>used
				<span class="_"> </span>to
				<span class="_"> </span>deﬁne<span class="_"> </span>speciﬁc<span class="_"> </span>attributes
				<span class="_"> </span>in<span class="_"> </span>the<span class="_"> </span>JSP<span class="_"> </span>
				page,
				<span class="_"> </span>lik<span class="_ _0"></span>e<span class="_"> </span>error
				<span class="_"> </span>page
				<span class="_"> </span>and<span class="_"> </span>buf<span class="_ _0"></span>fer
				<span class="_ _0"></span>.
			</div>
			<div class="t m0 x1 h2 y264 ff1 fs0 fc0 sc0 ls0 ws0">
				•<span class="_ _8"> </span>
				<span class="ff5">Taglib</span>:<span class="_ _a"> </span>it<span class="_"> </span>is
				<span class="_"> </span>
				used<span class="_"> </span>to<span class="_"> </span>declare<span class="_"> </span>a<span class="_"> </span>
				custom<span class="_"> </span>tag<span class="_"> </span>library<span class="_"> </span>which
				<span class="_"> </span>is<span class="_"> </span>used<span class="_"> </span>in<span class="_"> </span>
				the
				<span class="_"> </span>page.
			</div>
			<div class="t m0 x1 h7 y265 ff3 fs4 fc0 sc0 ls0 ws0">
				12.5<span class="_ _30"> </span>What<span class="_"> </span>are<span class="_"> </span>JSP
				<span class="_"> </span>actions<span class="_"> </span>?
			</div>
			<div class="t m0 x1 h2 y266 ff1 fs0 fc0 sc0 ls0 ws0">
				JSP<span class="_ _a"> </span>actions<span class="_ _a"> </span>use<span class="_ _a"> </span>constructs
				<span class="_ _a"> </span>in<span class="_ _a"> </span>XML<span class="_ _a"> </span>syntax
				<span class="_ _a"> </span>to<span class="_ _a"> </span>control<span class="_ _a"> </span>the
				<span class="_ _a"> </span>behavior<span class="_ _a"> </span>of<span class="_ _a"> </span>the
				<span class="_ _a"> </span>servlet<span class="_ _a"> </span>engine.<span class="_ _8"> </span>JSP
				<span class="_ _a"> </span>actions<span class="_ _a"> </span>are<span class="_ _a"> </span>executed
				<span class="_ _24"> </span>when<span class="_ _a"> </span>a<span class="_ _13"> </span>JSP
			</div>
			<div class="t m0 x1 h2 y267 ff1 fs0 fc0 sc0 ls0 ws0">
				page<span class="_"> </span>is<span class="_"> </span>requested.<span class="_ _a"> </span>They
				<span class="_"> </span>can<span class="_"> </span>be<span class="_"> </span>dynamically
				<span class="_ _24"> </span>inserted<span class="_"> </span>into<span class="_"> </span>a
				<span class="_"> </span>ﬁle,<span class="_"> </span>re-use<span class="_"> </span>JavaBeans
				<span class="_"> </span>components,<span class="_"> </span>forward<span class="_"> </span>the
				<span class="_"> </span>user<span class="_"> </span>to<span class="_"> </span>another
				<span class="_"> </span>
				page,
			</div>
			<div class="t m0 x1 h2 y268 ff1 fs0 fc0 sc0 ls0 ws0">
				or<span class="_"> </span>generate<span class="_"> </span>HTML<span class="_"> </span>for
				<span class="_"> </span>the<span class="_"> </span>Jav<span class="_ _0"></span>a<span class="_"> </span>
				plugin.Some<span class="_"> </span>of<span class="_"> </span>the<span class="_"> </span>av
				<span class="_ _0"></span>ailable<span class="_"> </span>actions<span class="_"> </span>are
				<span class="_"> </span>listed<span class="_"> </span>below:
			</div>
			<div class="t m0 x1 h2 y269 ff1 fs0 fc0 sc0 ls0 ws0">
				•<span class="_ _8"> </span>
				<span class="ff5">
					jsp:include<span class="_ _4"> </span>
				</span>
				-<span class="_"> </span>includes<span class="_"> </span>a<span class="_"> </span>ﬁle,
				<span class="_"> </span>
				when<span class="_"> </span>the<span class="_"> </span>JSP<span class="_"> </span>page
				<span class="_"> </span>is
				<span class="_"> </span>requested.
			</div>
			<div class="t m0 x1 h2 y26a ff1 fs0 fc0 sc0 ls0 ws0">
				•<span class="_ _8"> </span>
				<span class="ff5">
					jsp:useBean<span class="_ _4"> </span>
				</span>
				-<span class="_"> </span>ﬁnds<span class="_"> </span>or<span class="_"> </span>instantiates
				<span class="_"> </span>a<span class="_"> </span>Jav<span class="_ _0"></span>aBean.
			</div>
			<div class="t m0 x1 h2 y26b ff1 fs0 fc0 sc0 ls0 ws0">
				•<span class="_ _8"> </span>
				<span class="ff5">
					jsp:setProperty<span class="_ _4"> </span>
				</span>
				-<span class="_"> </span>sets<span class="_"> </span>the<span class="_"> </span>property
				<span class="_"> </span>
				of<span class="_"> </span>a<span class="_"> </span>Jav<span class="_ _0"></span>aBean.
			</div>
			<div class="t m0 x1 h2 y26c ff1 fs0 fc0 sc0 ls0 ws0">
				•<span class="_ _8"> </span>
				<span class="ff5">
					jsp:getProperty<span class="_ _4"> </span>
				</span>
				-<span class="_"> </span>gets<span class="_"> </span>the<span class="_"> </span>property
				<span class="_"> </span>
				of<span class="_"> </span>a<span class="_"> </span>Jav<span class="_ _0"></span>aBean.
			</div>
			<div class="t m0 x1 h2 y26d ff1 fs0 fc0 sc0 ls0 ws0">
				•<span class="_ _8"> </span>
				<span class="ff5">
					jsp:forward<span class="_ _4"> </span>
				</span>
				-<span class="_"> </span>forwards<span class="_"> </span>the<span class="_"> </span>requester
				<span class="_"> </span>to<span class="_"> </span>a<span class="_"> </span>ne<span class="_ _0"></span>w
				<span class="_"> </span>page.
			</div>
			<div class="t m0 x1 h2 y26e ff1 fs0 fc0 sc0 ls0 ws0">
				•<span class="_ _8"> </span>
				<span class="ff5">
					jsp:plugin<span class="_ _4"> </span>
				</span>
				-<span class="_"> </span>generates<span class="_"> </span>browser<span class="_ _0"></span>-speciﬁc
				<span class="_"> </span>code.
			</div>
			<div class="t m0 x1 h7 y26f ff3 fs4 fc0 sc0 ls0 ws0">
				12.6<span class="_ _30"> </span>What<span class="_"> </span>are<span class="_"> </span>Scriptlets
				<span class="_"> </span>?
			</div>
			<div class="t m0 x1 h2 y270 ff1 fs0 fc0 sc0 ls0 ws0">
				In<span class="_ _a"> </span>Jav<span class="_ _0"></span>a<span class="_ _24"> </span>Server
				<span class="_ _a"> </span>Pages<span class="_ _24"> </span>(JSP)<span class="_ _a"> </span>technology
				<span class="_ _0"></span>,<span class="_ _a"> </span>a<span class="_ _a"> </span>scriptlet
				<span class="_ _a"> </span>is<span class="_ _a"> </span>a<span class="_ _24"> </span>piece
				<span class="_ _a"> </span>of<span class="_ _a"> </span>Jav<span class="_ _0"></span>a-code
				<span class="_ _a"> </span>embedded<span class="_ _a"> </span>in<span class="_ _a"> </span>a
				<span class="_ _a"> </span>JSP<span class="_ _a"> </span>page.<span class="_ _17"> </span>The
				<span class="_ _a"> </span>scriptlet<span class="_ _a"> </span>is<span class="_ _a"> </span>e
				<span class="_ _0"></span>verything
			</div>
			<div class="t m0 x1 h2 y271 ff1 fs0 fc0 sc0 ls0 ws0">
				inside<span class="_"> </span>the<span class="_"> </span>tags.<span class="_ _a"> </span>Between
				<span class="_"> </span>these<span class="_"> </span>tags,<span class="_"> </span>a<span class="_"> </span>user
				<span class="_"> </span>can<span class="_"> </span>add<span class="_"> </span>any
				<span class="_"> </span>v<span class="_ _0"></span>alid<span class="_"> </span>scriplet.
			</div>
			<div class="t m0 x1 h7 y272 ff3 fs4 fc0 sc0 ls0 ws0">
				12.7<span class="_ _30"> </span>What<span class="_"> </span>are<span class="_"> </span>Decalarations
				<span class="_"> </span>?
			</div>
			<div class="t m0 x1 h2 y273 ff1 fs0 fc0 sc0 ls0 ws0">
				Declarations<span class="_"> </span>are<span class="_"> </span>similar<span class="_"> </span>to
				<span class="_"> </span>variable<span class="_"> </span>declarations<span class="_"> </span>in
				<span class="_"> </span>Ja<span class="_ _0"></span>va.<span class="_ _24"> </span>Declarations
				<span class="_"> </span>are<span class="_"> </span>used<span class="_ _24"> </span>to
				<span class="_"> </span>
				declare<span class="_"> </span>variables<span class="_"> </span>for<span class="_"> </span>subsequent
				<span class="_"> </span>use<span class="_"> </span>in<span class="_"> </span>e<span class="_ _0"></span>
				xpres-
			</div>
			<div class="t m0 x1 h2 y1d ff1 fs0 fc0 sc0 ls0 ws0">
				•<span class="_ _8"> </span>
				<span class="ff5">
					Include<span class="_ _18"> </span>directive
				</span>
				:<span class="_ _a"> </span>it<span class="_"> </span>is<span class="_"> </span>used
				<span class="_"> </span>to
				<span class="_"> </span>include<span class="_"> </span>a<span class="_"> </span>ﬁle
				<span class="_"> </span>and
				<span class="_"> </span>merges<span class="_"> </span>the<span class="_"> </span>content
				<span class="_"> </span>
				of<span class="_"> </span>the<span class="_"> </span>ﬁle<span class="_"> </span>with
				<span class="_"> </span>the
				<span class="_"> </span>current<span class="_"> </span>page.
			</div>
			<div class="t m0 x1 h2 y263 ff1 fs0 fc0 sc0 ls0 ws0">
				•<span class="_ _8"> </span>
				<span class="ff5">
					Page<span class="_ _18"> </span>directive
				</span>
				:<span class="_ _a"> </span>it<span class="_"> </span>is<span class="_"> </span>used
				<span class="_"> </span>to
				<span class="_"> </span>deﬁne<span class="_"> </span>speciﬁc<span class="_"> </span>attributes
				<span class="_"> </span>in<span class="_"> </span>the<span class="_"> </span>JSP<span class="_"> </span>
				page,
				<span class="_"> </span>lik<span class="_ _0"></span>e<span class="_"> </span>error
				<span class="_"> </span>page
				<span class="_"> </span>and<span class="_"> </span>buf<span class="_ _0"></span>fer
				<span class="_ _0"></span>.
			</div>
			<div class="t m0 x1 h2 y264 ff1 fs0 fc0 sc0 ls0 ws0">
				•<span class="_ _8"> </span>
				<span class="ff5">Taglib</span>:<span class="_ _a"> </span>it<span class="_"> </span>is
				<span class="_"> </span>
				used<span class="_"> </span>to<span class="_"> </span>declare<span class="_"> </span>a<span class="_"> </span>
				custom<span class="_"> </span>tag<span class="_"> </span>library<span class="_"> </span>which
				<span class="_"> </span>is<span class="_"> </span>used<span class="_"> </span>in<span class="_"> </span>
				the
				<span class="_"> </span>page.
			</div>
			<div class="t m0 x1 h7 y265 ff3 fs4 fc0 sc0 ls0 ws0">
				12.5<span class="_ _30"> </span>What<span class="_"> </span>are<span class="_"> </span>JSP
				<span class="_"> </span>actions<span class="_"> </span>?
			</div>
			<div class="t m0 x1 h2 y266 ff1 fs0 fc0 sc0 ls0 ws0">
				JSP<span class="_ _a"> </span>actions<span class="_ _a"> </span>use<span class="_ _a"> </span>constructs
				<span class="_ _a"> </span>in<span class="_ _a"> </span>XML<span class="_ _a"> </span>syntax
				<span class="_ _a"> </span>to<span class="_ _a"> </span>control<span class="_ _a"> </span>the
				<span class="_ _a"> </span>behavior<span class="_ _a"> </span>of<span class="_ _a"> </span>the
				<span class="_ _a"> </span>servlet<span class="_ _a"> </span>engine.<span class="_ _8"> </span>JSP
				<span class="_ _a"> </span>actions<span class="_ _a"> </span>are<span class="_ _a"> </span>executed
				<span class="_ _24"> </span>when<span class="_ _a"> </span>a<span class="_ _13"> </span>JSP
			</div>
			<div class="t m0 x1 h2 y267 ff1 fs0 fc0 sc0 ls0 ws0">
				page<span class="_"> </span>is<span class="_"> </span>requested.<span class="_ _a"> </span>They
				<span class="_"> </span>can<span class="_"> </span>be<span class="_"> </span>dynamically
				<span class="_ _24"> </span>inserted<span class="_"> </span>into<span class="_"> </span>a
				<span class="_"> </span>ﬁle,<span class="_"> </span>re-use<span class="_"> </span>JavaBeans
				<span class="_"> </span>components,<span class="_"> </span>forward<span class="_"> </span>the
				<span class="_"> </span>user<span class="_"> </span>to<span class="_"> </span>another
				<span class="_"> </span>
				page,
			</div>
			<div class="t m0 x1 h2 y268 ff1 fs0 fc0 sc0 ls0 ws0">
				or<span class="_"> </span>generate<span class="_"> </span>HTML<span class="_"> </span>for
				<span class="_"> </span>the<span class="_"> </span>Jav<span class="_ _0"></span>a<span class="_"> </span>
				plugin.Some<span class="_"> </span>of<span class="_"> </span>the<span class="_"> </span>av
				<span class="_ _0"></span>ailable<span class="_"> </span>actions<span class="_"> </span>are
				<span class="_"> </span>listed<span class="_"> </span>below:
			</div>
			<div class="t m0 x1 h2 y269 ff1 fs0 fc0 sc0 ls0 ws0">
				•<span class="_ _8"> </span>
				<span class="ff5">
					jsp:include<span class="_ _4"> </span>
				</span>
				-<span class="_"> </span>includes<span class="_"> </span>a<span class="_"> </span>ﬁle,
				<span class="_"> </span>
				when<span class="_"> </span>the<span class="_"> </span>JSP<span class="_"> </span>page
				<span class="_"> </span>is
				<span class="_"> </span>requested.
			</div>
			<div class="t m0 x1 h2 y26a ff1 fs0 fc0 sc0 ls0 ws0">
				•<span class="_ _8"> </span>
				<span class="ff5">
					jsp:useBean<span class="_ _4"> </span>
				</span>
				-<span class="_"> </span>ﬁnds<span class="_"> </span>or<span class="_"> </span>instantiates
				<span class="_"> </span>a<span class="_"> </span>Jav<span class="_ _0"></span>aBean.
			</div>
			<div class="t m0 x1 h2 y26b ff1 fs0 fc0 sc0 ls0 ws0">
				•<span class="_ _8"> </span>
				<span class="ff5">
					jsp:setProperty<span class="_ _4"> </span>
				</span>
				-<span class="_"> </span>sets<span class="_"> </span>the<span class="_"> </span>property
				<span class="_"> </span>
				of<span class="_"> </span>a<span class="_"> </span>Jav<span class="_ _0"></span>aBean.
			</div>
			<div class="t m0 x1 h2 y26c ff1 fs0 fc0 sc0 ls0 ws0">
				•<span class="_ _8"> </span>
				<span class="ff5">
					jsp:getProperty<span class="_ _4"> </span>
				</span>
				-<span class="_"> </span>gets<span class="_"> </span>the<span class="_"> </span>property
				<span class="_"> </span>
				of<span class="_"> </span>a<span class="_"> </span>Jav<span class="_ _0"></span>aBean.
			</div>
			<div class="t m0 x1 h2 y26d ff1 fs0 fc0 sc0 ls0 ws0">
				•<span class="_ _8"> </span>
				<span class="ff5">
					jsp:forward<span class="_ _4"> </span>
				</span>
				-<span class="_"> </span>forwards<span class="_"> </span>the<span class="_"> </span>requester
				<span class="_"> </span>to<span class="_"> </span>a<span class="_"> </span>ne<span class="_ _0"></span>w
				<span class="_"> </span>page.
			</div>
			<div class="t m0 x1 h2 y26e ff1 fs0 fc0 sc0 ls0 ws0">
				•<span class="_ _8"> </span>
				<span class="ff5">
					jsp:plugin<span class="_ _4"> </span>
				</span>
				-<span class="_"> </span>generates<span class="_"> </span>browser<span class="_ _0"></span>-speciﬁc
				<span class="_"> </span>code.
			</div>
			<div class="t m0 x1 h7 y26f ff3 fs4 fc0 sc0 ls0 ws0">
				12.6<span class="_ _30"> </span>What<span class="_"> </span>are<span class="_"> </span>Scriptlets
				<span class="_"> </span>?
			</div>
			<div class="t m0 x1 h2 y270 ff1 fs0 fc0 sc0 ls0 ws0">
				In<span class="_ _a"> </span>Jav<span class="_ _0"></span>a<span class="_ _24"> </span>Server
				<span class="_ _a"> </span>Pages<span class="_ _24"> </span>(JSP)<span class="_ _a"> </span>technology
				<span class="_ _0"></span>,<span class="_ _a"> </span>a<span class="_ _a"> </span>scriptlet
				<span class="_ _a"> </span>is<span class="_ _a"> </span>a<span class="_ _24"> </span>piece
				<span class="_ _a"> </span>of<span class="_ _a"> </span>Jav<span class="_ _0"></span>a-code
				<span class="_ _a"> </span>embedded<span class="_ _a"> </span>in<span class="_ _a"> </span>a
				<span class="_ _a"> </span>JSP<span class="_ _a"> </span>page.<span class="_ _17"> </span>The
				<span class="_ _a"> </span>scriptlet<span class="_ _a"> </span>is<span class="_ _a"> </span>e
				<span class="_ _0"></span>verything
			</div>
			<div class="t m0 x1 h2 y271 ff1 fs0 fc0 sc0 ls0 ws0">
				inside<span class="_"> </span>the<span class="_"> </span>tags.<span class="_ _a"> </span>Between
				<span class="_"> </span>these<span class="_"> </span>tags,<span class="_"> </span>a<span class="_"> </span>user
				<span class="_"> </span>can<span class="_"> </span>add<span class="_"> </span>any
				<span class="_"> </span>v<span class="_ _0"></span>alid<span class="_"> </span>scriplet.
			</div>
			<div class="t m0 x1 h7 y272 ff3 fs4 fc0 sc0 ls0 ws0">
				12.7<span class="_ _30"> </span>What<span class="_"> </span>are<span class="_"> </span>Decalarations
				<span class="_"> </span>?
			</div>
			<div class="t m0 x1 h2 y273 ff1 fs0 fc0 sc0 ls0 ws0">
				Declarations<span class="_"> </span>are<span class="_"> </span>similar<span class="_"> </span>to
				<span class="_"> </span>variable<span class="_"> </span>declarations<span class="_"> </span>in
				<span class="_"> </span>Ja<span class="_ _0"></span>va.<span class="_ _24"> </span>Declarations
				<span class="_"> </span>are<span class="_"> </span>used<span class="_ _24"> </span>to
				<span class="_"> </span>
				declare<span class="_"> </span>variables<span class="_"> </span>for<span class="_"> </span>subsequent
				<span class="_"> </span>use<span class="_"> </span>in<span class="_"> </span>e<span class="_ _0"></span>
				xpres-
			</div>
		</div>
	);
}