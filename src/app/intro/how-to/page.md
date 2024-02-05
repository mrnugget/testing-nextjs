---
title: 10 years of programming
nextjs:
  metadata:
    title: 10 years of programming
    description: 10 years of programming
---


Last month, April 2022, marked the 10 year anniversary of my start as a
professional programmer.

I started programming earlier than that, but hadn't been paid a salary. As a
teenager I built websites and IRC bots and wrote tiny Python scripts. Then I
stopped and played guitar for a few years. In my twenties, I rather
coincidentally rediscovered how much I enjoy programming when I was asked to
build another website and found out how much had changed about the web while I
was away (it's HTML5 now!).

That made me wonder whether programming wouldn't be the better career choice
than continuing to study philosophy at university. [Robin][robin] answered that
question for me by generously offering me a paid internship.

Now it's been 10 years, which is, to be honest, neither a significant marker of
my growth as a programmer nor my career, but realising that it's been 10 years
made me pause and reflect.

The following is a loose, unordered collection of thoughts that come up when I
look back on the past 10 years. Things I've learned, things I've unlearned,
things I've changed my opinion on, things I never thought I'd believe in and now
do.

They're very much products of the context in which I helped develop software: as
an intern for Robin, then as a junior developer for Robin, as a software
developer for [a small German startup][flinc], as a senior software developer
for [a German startup inside a huge German corporation][ioki], and now as a
staff engineer for [a fully remote, asynchronous US startup][sourcegraph]. Take
that as a disclaimer. I bet if I'd worked in a game studio, a hardware company,
and a big tech corporation instead, this text would be very different.

## Fearlessness is undervalued

Most of the programmers I look up to and learned from share one trait that is
rarely talked about: fearlessness.

They dive into an unknown codebase without fear. They open up the code of a
dependency that they suspect is misbehaving without fear. They start working on
something without knowing how they'll finish.

It's inspiring seeing someone being fearless, but becoming fearless yourself is
one of the best learning accelerators I've found.

## You can't predict the future; try and you might end up in trouble

We all know this. _Of course_, we can't predict the future.

But it took me years to truly take it into account when programming.

In the first third of my career I'd think: we _will_ need this, so let's build
it now.

In the second third: we _might_ need this, so let's prepare for it.

Now: we _don't know_ whether we'll need this, it's _a_ possibility, sure, and it
looks like we _might_ need it, yes, but things change all the time, so let's
build what _we know we need right now_.

## _Of course_ I write code so it's easy to test

I also write code so it's easy to read and understand, or easy to delete, or
easy to modify, or easy to review. I don't write code only for the computer to
execute.

## Nothing really matters, except bringing value to the customer

Type safety, 100% test coverage, the ability to fluently express business logic
in code, perfect development tooling, an efficient system that wastes no
resources, using the best programming language for the job, an elegant API design,
a fast feedback loop, writing _great code_ -- these are *not* the goal.

Here's the goal: providing value to your customers, by shipping software that
solves their problem, repeatedly.

The things above help you do that -- faster, cheaper, more efficiently, safer,
with greater joy -- but they're not the goal. The goal is to provide value to
your customers.

The trap: it's often easier to write software than to deliver it. But delivering
is what it's all about.

## Perfection is unachievable

I'm not sure I ever thought it is, but now I'm certain it is not. Everything is
the result of trade-offs.

You will never reach 100% on every axis that you care about. Something has to
give. And when you think you _did_ make it perfect, you'll soon realise that you
forgot something.

My aesthetics have changed too. Instead of looking for the beauty that lies in
perfection I now think the program that succeeds despite its flaws is beautiful.
Look at that little program go, holding the internet together, despite the 17
TODOs in it.

## If you can't connect it to the business, it doesn't matter

You can refactor a codebase and clean it up significantly, making it easier to
understand for everybody _and_ easier to extend, but all of that won't matter if
that codebase gets deleted four months later because the project didn't help the
business.

You can spend weeks adding tracing and observability to all of the code you
write, only to realise that nobody will ever look at it, because that code runs
three times a day and never causes any problems.

You can tweak and optimize your code to run so efficiently that the company can
halve the number of machines required to run it and then see that the costs you
saved are nothing in comparison to the salary you were paid while optimizing.

You can spend your time doing fantastic technical work and still waste it.

## Figure out what the rule is trying to prevent, then consider the rule optional

If you'd asked me 5 years ago whether TDD, Clean Code, Software Craftsmanship,
and other schools of thought are dogmatic, I would've said "no! Can't you see?
Clean and good code is important!"

Now I look back at the time when I thought that a rule such as "a method should
not be longer than 5 lines" was useful and shake my head.

It's not about the rules! It's about the problems these rules are trying to
prevent. If you don't have the problem they're trying to prevent, or you can
prevent it another way, you don't need the rule.

## Write tests that give you confidence that the system works as it should

Don't worry too much about whether a test is an integration or an end-to-end
test, a unit test or a functional test. Don't fight with others about whether
you should test private methods or not. Stop worrying about whether you should
hit the database in tests or not.

Instead write tests that tell you the system is working the way it should.
Ideally with 3 keystrokes and in less than 1 second.

This one took me a long time, a lot of ultimately useless discussions, and bugs
in my code to learn.

## Best practices are often based on the assumption that you know what the code should do

If you know exactly what you want to build then best practices and patterns can
help you, by giving advice on _how_ to build it.

But if you don't know yet what the program should do, or what it will look like
in four weeks, then some best practices can make things even harder.

Some practices are the best when applied to a rewrite, but the worst when you're
still exploring.

## Using other people's code is not as good as I thought

I started my career writing Ruby and JavaScript, with package managers being
available and the question "isn't there a package that does that?" always
hanging in the air.

Common sense dictated: if you can, try to use a library instead of writing it
yourself. Reuse code as much as you can. Don't reinvent the wheel. Don't copy &
paste. That was what I believed for years.

But there are downsides to that. _Sometimes_ writing that one function yourself
might actually be better than adding a dependency.

Dependencies aren't free. You have to keep them up to date. They increase your
compile or loading times. They add strange things to your stack traces. And
_very often_ they do more than what you need them to do, which means you're
paying for more than you're getting.

When you're glueing other people's code together, there's a very real danger
that the _glue_ is where complexity will accumulate. But glue code is the last
place where you want your complexity to live. It _hides_ complexity. What you
want is to make complexity as visible as you can, shining a light on it with the
hope that it turns into dust and disappears.

_Sometimes_ it's better to write it yourself than to use other people's code.

## Some companies get it, others don't. But nobody's perfect

There is a big difference between developing software for a software company and
developing software for a company that employs software developers because it
has to. It's a joy to work for a company in which leadership _gets_ software and
how it's made.

That being said: I don't think any company has it all figured out. Everybody's
winging it to some degree.

## Investing in feedback loops is never wasted effort

I've never regretted improving a feedback loop. Faster tests, better test
output, faster deploys, turning a manual feedback loop into something that gives
me a signal with one keybinding.

Watch out, though: once you've seen the light of developing software with a
really fast and high-signal feedback loop, you'll long for it forever.

## Always leave something unfinished at the end of the day

A failing test, a compiler error, a half-finished sentence -- end your day with
one of these and the next morning you can sit down and continue where you left
off, skipping "hmm, what should I do today..." entirely.

There's nothing that gets me started as fast as a failing test that needs to
pass.

## Perfectionism is a trap

Perfectionism is based on a lie. You'll never get to the point where you're
_done_ and sit and rest and say "ah, _now_ it's perfect". There'll always be
something. You know it, I know it. There's no _perfect_ (see above). Accept it
and ship and continue building.

Aim for 80% and consider the other 20% optional. It's freeing and gives you room
to breath. You might end up at 99%, who knows?

## Sharpen the axe

I've gotten a lot out of investing in my tools: Vim, git, shells, the Unix
environment, testing frameworks. I truly enjoy spending a Sunday morning with my
Vim configuration.

But it's possible to overdo it and get stuck in the configuration phase, doing
endless tinkering. You have to _use your tools_ to get feedback on how to best
configure and use them.

## Hiring is hard

I've done hundreds of interviews now and the most important insight I've gained
is that hiring is really, really hard. The verdict on an interview has so many
random inputs that it makes everything between a **Strong Yes** and **Strong
No** wobbly.

Often I wish there was a way to find out whether people have the get-shit-done
gene.

## The most important trait in developers: rolling up their sleeves because it has to get done

Here's something that all the people I enjoyed working with have in common: they
do the work. They know that some tasks aren't fun or glamorous or interesting.
But someone has to do them, so they do them.

## Work on a codebase with other people over a longer period of time

Nothing has helped me get better at software _engineering_ as much as working
with a group of other people on the same codebase over multiple years.

You'll see how decisions play out.

You'll see what ended up mattering and what didn't.

You'll see how extensible your code truly is when your colleague tries to modify
it 3 years after you wrote it.

You'll see whether your prediction of "we have 2 of these now, but I'm sure
there'll be 5 in the future" will come true or not and can take the outcome into
account when doing other predictions.

You'll regret writing some code and you'll be happy that you wrote some other
code. You'll learn from reflecting on the difference between the two.

You'll see tooling break down just because something somewhere changed and you
had nothing to do with it but you still have to fix it.

You'll say "I've never had to think about this in 3 years" about some pieces of
software and cherish them.

You'll see what parts of the codebase new colleagues struggle to understand and
which parts they immediately get productive in.

You'll see what the code you wrote looks like 4 years later.

## Knowing the full stack

There's few things as motivating to me as hearing "you don't really need to know
how it works..."

Sure, I might not _need_ to, but I wouldn't do the work I do today if I hadn't
tried to find out how a GC works, or how Unix works, or how multi-threading
works, or how a database stores data, or how interpreters and compilers work.

It benefits the work I do, too. I can make better technical decisions by being
able to weigh trade-offs more accurately, knowing what goes on under the hood.

## Typing can be the bottleneck

I've [said it before](https://thorstenball.com/blog/2020/09/01/typing-can-be-the-bottleneck/). Don't let typing be the bottleneck.

## Code reviews aren't waterproof

For the longest time I assumed it's my fault when a bug made it through one of
my code reviews. _I missed that! How could I have missed that? It's so
obvious!_

Later I found out that it's not just me: other people miss bugs in code reviews
too. In fact, they accept and freely talk about how code reviews aren't
infallible. I was relieved.

It changed how I see code reviews: as something imperfect, something that needs
to be combined with other ways to verify the code.

## Not every code review is worth the effort

Not every code needs a really thorough review. Sometimes, if the risk is
acceptable, it's fine to drop a quick "LGTM!". It unblocks your colleagues,
keeps momentum and, somehow, builds trust.

## Negativity begets negativity

The more you give in to negativity, the more you get. Always much more than you
wanted.

It's viral. It starts with snark, it turns into cynicism, it then morphs into
"everything sucks". Soon after, the question of "why even bother?" starts to
attach itself to everything. It ends with people hiding excitement and joy and
ideas from you.

Being negative is _too easy_. At a certain point I realised that pointing at
things and saying what's bad about them and shrugging because, well, didn't I
expect this to be bad (everything's bad, right?) - that's easy. Easy to do and
easy to mistake for an engineering mindset that can spot deficiencies and worst
cases (which it is not).

What's hard is seeing things for what they _could be_, what's beautiful about
them. Encouraging ideas even when they're barely something to talk about.
Creating and fostering joy. That's _challenging_.

So at some point I decided I had enough and tried to do the challenging thing.
So far it's served me well.

## Every dial at 100% all the time doesn't work

I can't do everything equally well all the time. I can't write a book _and_ make
progress in my career _and_ be a great father _and_ set PRs in the gym _and_
read two books. It won't work for more than one or two weeks. It's not
sustainable.

Now I let my interests take turns: when I want to make progress on a specific
thing, I focus on that for a while and accept that the other things have to go
into maintenance mode.

## Code has mass

Code has mass. Every additional line of code you don't need is ballast. It
weighs your codebase down, making it harder to steer and change direction if you
need to. The less code you need, the better.

Code has to be read, it has to be tested, it has to be kept compatible, it has
to stay secure, it has to keep working. Even if it's not doing any useful work.
_It doesn't hurt having it around, does it?_ Yes, it does. Delete it and move
on. If necessary, restore from version control.

The same is true for tests, which I've only learned too late.

## Programming as a part of my life

Ever since I started as an intern I spent a considerable amount of time outside
of work on programming: reading technical books, _writing_ books, working on
sideprojects, writing blog posts, giving talks, traveling to conferences,
learning new languages and tools.

That some companies don't care about your college degree if you can demonstrate
that you're really good at programming was _fuel_ for me for years.

I enjoy spending time on programming outside of work, but not all the time. Some
of it feels like work. It takes effort to read some technical books. But some
things don't have to feel good while you're doing them.

My career would be completely different if I had only programmed and learned
about programming at my day job.

## Computers are fast

Building web applications made me think that 100ms is fast and that 50ms is
_really fast_. Writing a compiler has taught me that 1ms is an eternity for a
modern computer.

## I still love programming very much

Some of what I wrote can be interpreted as me having grown cynical over the
years. I mean: _nothing matters_ and _perfection is unachievable_? Come on.

But it's the opposite. I still care. I care very much. But I care about fewer
things and I still love programming very much.

<!-- References -->
[yagni]: https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it
[russcox]: https://research.swtch.com/deps

[robin]: https://coding-robin.de/
[flinc]: https://de.wikipedia.org/wiki/Flinc
[ioki]: https://ioki.com/
[sourcegraph]: https://about.sourcegraph.com/
