(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{289:function(t,v,_){"use strict";_.r(v);var a=_(14),s=Object(a.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"php面向对象的三大特征"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#php面向对象的三大特征"}},[t._v("#")]),t._v(" PHP面向对象的三大特征")]),t._v(" "),v("ul",[v("li",[t._v("封装：封装就是把抽取出来的数据和对数据的操作封装在一起，数据被保护在内部，程序的其他部分只有被授权的操作（方法）才能对数据进行操作。")]),t._v(" "),v("li",[t._v("继承：当多个类中有相同的属性和方法，这是可以提取出来封装成一个父类，继承这个公共的父类，")]),t._v(" "),v("li",[t._v("多态："),v("u",[t._v("同一类的对象收到相同消息时，会得到不同的结果。")])])]),t._v(" "),v("h2",{attrs:{id:"mysql-三范式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mysql-三范式"}},[t._v("#")]),t._v(" Mysql 三范式")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("有主键，具有原子性，字段不可分割（比如：地址可拆分不符合第一范式）")])]),t._v(" "),v("li",[v("p",[t._v("（建立在第一范式基础上）非主键字段完全依赖主键，没有部分依赖（比如：学生选课表，必须由中间表，不能学生信息和老师信息能同时出现在一张表中）")])]),t._v(" "),v("li",[v("p",[t._v("没有传递依赖（比如：订单表中可以包含用户id，不能包含用户信息）")])])]),t._v(" "),v("h2",{attrs:{id:"mysql的共享锁、排它锁、悲观锁、乐观锁"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mysql的共享锁、排它锁、悲观锁、乐观锁"}},[t._v("#")]),t._v(" Mysql的共享锁、排它锁、悲观锁、乐观锁？")]),t._v(" "),v("blockquote",[v("p",[t._v("前文："),v("strong",[t._v("数据库的增删改(update/insert/delete) 操作默认都会加排他锁，而查询(select)不会加任何锁")]),t._v("。")])]),t._v(" "),v("p",[v("strong",[t._v("首先说明，乐观锁和悲观锁都是针对读（select）来说的。")])]),t._v(" "),v("ul",[v("li",[t._v("悲观锁（innodb 加行锁的前提是：必须是通过索引条件来检索数据，否则会切换为表锁。）")])]),t._v(" "),v("blockquote",[v("p",[t._v("1、共享锁（s 锁、读锁）：多个事务可封锁一个共享页；任何事务都不能修改该页； 通常是该页被读取完毕，S锁立即被释放。")])]),t._v(" "),v("blockquote",[v("p",[t._v("共享锁又称读锁，是读取操作创建的锁。其他用户可以并发读取数据，但任何事务都不能对数据进行修改（获取数据上的排他锁），直到已释放所有共享锁。")]),t._v(" "),v("p",[t._v("如果事务T对数据A加上共享锁后，则其他事务只能对A再加共享锁，不能加排他锁。获准共享锁的事务**"),v("u",[t._v("只能读数据，不能修改数据")]),t._v("**。")])]),t._v(" "),v("blockquote",[v("p",[t._v("2、排它锁（x 锁、写锁）：仅允许一个事务封锁此页；其他任何事务必须等到X锁被释放才能对该页进行访问；X锁一直到事务结束才能被释放。")])]),t._v(" "),v("blockquote",[v("p",[t._v("排他锁又称写锁，如果事务T对数据A加上排他锁后，则其他事务不能再对A加任任何类型的封锁。获准排他锁的事务 "),v("u",[v("strong",[t._v("既能读数据，又能修改数据")])]),t._v("。")])]),t._v(" "),v("h4",{attrs:{id:"相关链接"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#相关链接"}},[t._v("#")]),t._v(" "),v("a",{attrs:{href:"https://blog.97it.net/archives/117.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("相关链接"),v("OutboundLink")],1)]),t._v(" "),v("ul",[v("li",[t._v("乐观锁")])]),t._v(" "),v("blockquote",[v("p",[t._v("很乐观，比如自增自减，不去判断该数据的准确性，比如库存变为负的。")])]),t._v(" "),v("h3",{attrs:{id:"总结-读用乐观锁-写用悲观锁。"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总结-读用乐观锁-写用悲观锁。"}},[t._v("#")]),t._v(" 总结："),v("strong",[t._v("读用乐观锁，写用悲观锁")]),t._v("。")]),t._v(" "),v("h2",{attrs:{id:"mysql-有哪些索引"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mysql-有哪些索引"}},[t._v("#")]),t._v(" Mysql 有哪些索引？")]),t._v(" "),v("h3",{attrs:{id:"主键索引"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#主键索引"}},[t._v("#")]),t._v(" 主键索引")]),t._v(" "),v("p",[t._v("它是一种特殊的唯一索引，不允许有空值。")]),t._v(" "),v("h3",{attrs:{id:"唯一索引"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#唯一索引"}},[t._v("#")]),t._v(" 唯一索引")]),t._v(" "),v("p",[t._v('与"普通索引"类似，不同的就是：索引列的值必须唯一，但允许有空值。')]),t._v(" "),v("blockquote",[v("p",[t._v("创建该索引时检查是否有重复的键值，每次对更新或增加记录时都会检查这一点")])]),t._v(" "),v("h3",{attrs:{id:"普通索引"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#普通索引"}},[t._v("#")]),t._v(" 普通索引")]),t._v(" "),v("p",[t._v("最基本的索引，没有任何限制")]),t._v(" "),v("h3",{attrs:{id:"联合索引"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#联合索引"}},[t._v("#")]),t._v(" 联合索引")]),t._v(" "),v("p",[t._v("联合索引指的是同时对多列创建的索引，索引的使用要遵循最左前缀匹配原则。")]),t._v(" "),v("h3",{attrs:{id:"索引延伸"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#索引延伸"}},[t._v("#")]),t._v(" 索引延伸")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("覆盖索引：索引查询中，如果辅助索引已经能够得到查询的所有信息了，就无需再回表，这个就是覆盖索引。（"),v("u",[v("strong",[t._v("覆盖所有又称主键索引、聚簇索引")])]),t._v("）")]),t._v(" "),v("blockquote",[v("p",[t._v("select id from user where age = 10;")])])]),t._v(" "),v("li",[v("p",[t._v("索引下推（MySQL 5.6以上）：索引下推的机制：可以在索引遍历过程中，对索引中包含的字段先做判断，直接过滤掉不满足条件的记录，减少回表次数。")]),t._v(" "),v("blockquote",[v("p",[t._v("例如表中存在"),v("code",[t._v("(张三, 10)")]),t._v("和"),v("code",[t._v("(张三, 15)")]),t._v("两条记录，此刻要查询"),v("code",[t._v("(张三, 20)")]),t._v("的记录。查询时先通过"),v("code",[t._v("张三")]),t._v("定位到所有符合条件的主键ID，然后在聚簇索引中遍历满足条件的行，看是否有符合age = 20的记录。实际情况是没有满足条件的记录的，这个回表过程也相当于是在做无用之功。")])])])]),t._v(" "),v("blockquote",[v("p",[t._v("相关链接：")]),t._v(" "),v("p",[t._v("https://www.dyxmq.cn/databases/mysql/clustered-nonclustered-union-and-unique-indexes-in-mysql.html")]),t._v(" "),v("p",[t._v("https://www.cnblogs.com/three-fighter/p/15246577.html")])]),t._v(" "),v("h3",{attrs:{id:"索引的优缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#索引的优缺点"}},[t._v("#")]),t._v(" 索引的优缺点")]),t._v(" "),v("h4",{attrs:{id:"优点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[t._v("#")]),t._v(" 优点：")]),t._v(" "),v("p",[t._v("1、唯一索引可以保证每一行数据的唯一性 2、提高查询速度 3、加速表与表的连接 4、显著的减少查询中分组和排序的时间 5、通过使用索引，可以在查询的过程中，使用优化隐藏器，提高系统的性能。")]),t._v(" "),v("h4",{attrs:{id:"缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" 缺点：")]),t._v(" "),v("p",[t._v("1、创建跟维护都需要耗时 2、创建索引时，需要对表加锁，在锁表的同时，可能会影响到其他的数据操作 3、索引需要磁盘的空间进行存储，磁盘占用也很快。\n4、当对表中的数据进行CRUD的时，也会触发索引的维护，而维护索引需要时间，可能会降低数据操作性能")]),t._v(" "),v("h2",{attrs:{id:"mysql-事物"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mysql-事物"}},[t._v("#")]),t._v(" MySQL 事物")]),t._v(" "),v("p",[t._v("事务主要是为了保证复杂数据库操作数据的一致性")]),t._v(" "),v("h3",{attrs:{id:"事物的特点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#事物的特点"}},[t._v("#")]),t._v(" 事物的特点：")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("原子性：事务的数据操作，要么全部执行成功，要么全部失败回滚到执行之前的状态，就像这个事务从来没有执行过一样。")])]),t._v(" "),v("li",[v("p",[t._v("隔离性：多个事务之间是相互隔离，互不影响的。数据库允许多个并发事务同时对其数据进行读写和修改的能力，隔离性可以防止多个事务并发执行时由于交叉执行而导致数据的不一致。")])]),t._v(" "),v("li",[v("p",[t._v("一致性：在事务操作之前和之后，数据都是保持一个相同的状态，数据库的完整性没有被破坏。")]),t._v(" "),v("blockquote",[v("p",[t._v("原子性和隔离性，对一致性有着至关重要的影响。")])]),t._v(" "),v("blockquote",[v("p",[t._v("从业务层面讲，“一致性”实际上是指事务把数据库从一个有效的状态转移成另一个有效状态。")])])]),t._v(" "),v("li",[v("p",[t._v("持久性：当事务操作完成后，数据会被刷新到磁盘永久保存，即便是系统故障也不会丢失。")])])]),t._v(" "),v("h3",{attrs:{id:"事物的隔离级别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#事物的隔离级别"}},[t._v("#")]),t._v(" 事物的隔离级别：")]),t._v(" "),v("ul",[v("li",[t._v("读未提交：一个事务未提交时，他做的变更能被其它事务看到。")]),t._v(" "),v("li",[t._v("读已提交： 一个事务提交后，它做的变更才能被其它事务看到。")]),t._v(" "),v("li",[t._v("可重复读（默认）：一个事务在执行过程中看到的数据和在事务启动前看到的数据一致，未提交的变更其它事务是不可见的。")]),t._v(" "),v("li",[t._v("串行化：对于同一行记录，写->写锁 ，读->读锁。当出现读写锁冲突时，只有当前一个事务执行完，下个一才能开始。")])]),t._v(" "),v("blockquote",[v("p",[t._v("隔离级别比较：可串行化>可重复读>读已提交>读未提交")])]),t._v(" "),v("blockquote",[v("p",[t._v("隔离级别对性能的影响比较：可串行化>可重复读>读已提交>读未提交")])]),t._v(" "),v("blockquote",[v("p",[t._v("由此看出，隔离级别越高，所需要消耗的MySQL性能越大（如事务并发严重性），为了平衡二者，一般建议设置的隔离级别为可重复读，MySQL默认的隔离级别也是可重复读。")])]),t._v(" "),v("h3",{attrs:{id:"事物并发可能出现的情况"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#事物并发可能出现的情况"}},[t._v("#")]),t._v(" 事物并发可能出现的情况：")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("脏的（脏读只在读未提交隔离级别才会出现）：一个事物读到另一个未提交事物修改过的数据")]),t._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"http://cdn.jsdelivr.net/gh/xiaoxuan6/static/images/202303082202552.png",alt:"img"}})]),t._v(" "),v("li",[v("p",[t._v("幻读（幻读在读未提交、读已提交、可重复读隔离级别都可能会出现）：一个事务先根据某些条件查询出一些记录，之后另一个事务又向表中插入了符合这些条件的记录，原先的事务再次按照该条件查询时，能把另一个事务插入的记录也读出来。")]),t._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"http://cdn.jsdelivr.net/gh/xiaoxuan6/static/images/202303082207871.png",alt:"img"}})]),t._v(" "),v("li",[v("p",[t._v("不可重复读（不可重复读在读未提交和读已提交隔离级别都可能会出现）：一个事务只能读到另一个已经提交的事务修改过的数据，并且其他事务每对该数据进行一次修改并提交后，该事务都能查询得到最新值。")]),t._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"http://cdn.jsdelivr.net/gh/xiaoxuan6/static/images/202303082208426.png",alt:"img"}})])]),t._v(" "),v("h3",{attrs:{id:"隔离级别和并发可能出现的问题解决方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#隔离级别和并发可能出现的问题解决方法"}},[t._v("#")]),t._v(" 隔离级别和并发可能出现的问题解决方法：")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://cdn.jsdelivr.net/gh/xiaoxuan6/static/images/202302021434724.png",alt:"无标题-2022-12-19-1202.excalidraw"}})]),t._v(" "),v("blockquote",[v("p",[t._v("相关链接：https://developer.aliyun.com/article/743691")])]),t._v(" "),v("h2",{attrs:{id:"什么情况下会导致索引失效"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么情况下会导致索引失效"}},[t._v("#")]),t._v(" 什么情况下会导致索引失效？")]),t._v(" "),v("ul",[v("li",[t._v("使用左侧模糊查询")]),t._v(" "),v("li",[t._v("使用范围查询之后的索引列会失效")]),t._v(" "),v("li",[t._v("使用不等于（!=、<>）使索引失效")]),t._v(" "),v("li",[t._v("查询语句中使用or链接")]),t._v(" "),v("li",[t._v("查询中存在类型转换")]),t._v(" "),v("li",[t._v("联合索引不满足最左匹配原则")]),t._v(" "),v("li",[t._v("当在查询中使用了 is not null 也会导致索引失效，而 is null 则会正常触发索引的")]),t._v(" "),v("li",[t._v("在索引的字段上做任何的计算、函数等操作")])]),t._v(" "),v("img",{staticStyle:{zoom:"70%"},attrs:{src:"https://segmentfault.com/img/remote/1460000021464574",alt:"img"}}),t._v(" "),v("h2",{attrs:{id:"建立索引的原则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#建立索引的原则"}},[t._v("#")]),t._v(" 建立索引的原则")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("符合联合索引做左侧原则")])]),t._v(" "),v("li",[v("p",[t._v("查询频繁的字段列采取建立索引")])]),t._v(" "),v("li",[v("p",[t._v("更新频繁的字段不适合建立索引")])]),t._v(" "),v("li",[v("p",[t._v("不能有效区分数据的列不适合做索引（索引的选择性越接近1，这个索引的效率很高）")]),t._v(" "),v("blockquote",[v("p",[t._v("性别可以认为是3种，男，女，其他。如果创建索引，查询语句 性别=‘男’的数据，索引的选择性就是3/1000=0.003。"),v("strong",[t._v("索引的选择性值很低，对查询提升不大，所以性别建索引意义不大")]),t._v("。")])])])]),t._v(" "),v("h2",{attrs:{id:"垃圾回收机制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收机制"}},[t._v("#")]),t._v(" 垃圾回收机制")]),t._v(" "),v("p",[t._v('每个 php 变量存在一个叫"zval"的变量容器中。除了包含变量的类型和值，还包括两个字节的额外信息: '),v("code",[t._v("is_ref")]),t._v(" 和 "),v("code",[t._v("refcount")])]),t._v(" "),v("ul",[v("li",[t._v("is_ref：是个bool值，用来标识这个变量是否是属于引用集合(reference set)。通过这个字节，php引擎才能把普通变量和引用变量区分开来")]),t._v(" "),v("li",[t._v("refcount：引用数，当值为0是会回收变量")])]),t._v(" "),v("p",[t._v("当变量赋值、传递时，会增加 value 的引用数， unset、return 等释放变量时再减掉引用数，减掉后如果发现 refcount 变为 0 则直接释放 value，这是变量的基本回收过程。")]),t._v(" "),v("blockquote",[v("p",[v("a",{attrs:{href:"https://www.php.net/manual/zh/features.gc.refcounting-basics.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("相关链接"),v("OutboundLink")],1)])]),t._v(" "),v("h2",{attrs:{id:"redis-有哪些内存回收机制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis-有哪些内存回收机制"}},[t._v("#")]),t._v(" Redis 有哪些内存回收机制？")]),t._v(" "),v("p",[t._v("redis 的内存回收主要分为：过期删除策略 与 内存淘汰策略 俩部分。")]),t._v(" "),v("h3",{attrs:{id:"过期删除策略"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#过期删除策略"}},[t._v("#")]),t._v(" 过期删除策略")]),t._v(" "),v("p",[t._v("删除到达过期时间的 key 。")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("定时删除：")]),t._v(" "),v("blockquote",[v("p",[t._v("对于每一个设置了过期时间的 key 都会创建一个定时器，一旦达到过期时间都会删除。这种方式立即清除过期数据，对内存比较好，")]),t._v(" "),v("p",[t._v("但是有缺点是：占用了大量 CPU 的资源去处理过期数据，会影响 redis 的吞吐量 和 响应时间。")])])]),t._v(" "),v("li",[v("p",[t._v("懒惰删除：")]),t._v(" "),v("blockquote",[v("p",[t._v("当访问一个 key 的时候，才会判断该 key 是否过期，如果过期就删除。该方式能最大限度节省 CPU 的资源。")]),t._v(" "),v("p",[t._v("但是对内存不太好，有一种比较极端的情况：出现大量的过期 key 没有被再次访问，因为不会被清除，导致占用了大量的内存。")])])]),t._v(" "),v("li",[v("p",[t._v("定期删除：")]),t._v(" "),v("blockquote",[v("p",[t._v("每隔一段时间，扫描redis 中过期key 的字典，并清除部分过期的key。这种方式是前俩种一种折中方法。")]),t._v(" "),v("p",[t._v("不同的情况下，调整定时扫描时间间隔，让CPU 与 内存达到最优。")])])])]),t._v(" "),v("h3",{attrs:{id:"内存淘汰策略"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#内存淘汰策略"}},[t._v("#")]),t._v(" 内存淘汰策略")]),t._v(" "),v("p",[t._v("redis 内存淘汰策略是指达到maxmemory极限时，使用某种算法来决定来清理哪些数据，以保证新数据存入。（原理同上）")]),t._v(" "),v("ul",[v("li",[t._v("当内存不足以容纳新写入数据时，新写入操作会报错")]),t._v(" "),v("li",[t._v("当内存不足以容纳新写入数据时，在键空间中，移除最近最少使用的 key（这个是最常用的）")]),t._v(" "),v("li",[t._v("当内存不足以容纳新写入数据时，在键空间中，随机移除某个 key")]),t._v(" "),v("li",[t._v("当内存不足以容纳新写入数据时，在设置了过期时间的键空间中，移除最近最少使用的 key")]),t._v(" "),v("li",[t._v("当内存不足以容纳新写入数据时，在设置了过期时间的键空间中，随机移除某个 key")]),t._v(" "),v("li",[t._v("当内存不足以容纳新写入数据时，在设置了过期时间的键空间中，有更早过期时间的 key 优先移除")])]),t._v(" "),v("h2",{attrs:{id:"redis-有哪些数据类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis-有哪些数据类型"}},[t._v("#")]),t._v(" Redis 有哪些数据类型?")]),t._v(" "),v("h3",{attrs:{id:"字符串"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#字符串"}},[t._v("#")]),t._v(" 字符串")]),t._v(" "),v("p",[v("strong",[t._v("string")]),t._v(" 是 redis 最基本的类型，一个 key 对应一个 value")]),t._v(" "),v("blockquote",[v("p",[t._v("常用命令：get、set、incr、decr、mget")]),t._v(" "),v("p",[t._v("应用场景：常规key-value缓存应用。常规计数: 微博数, 粉丝数")])]),t._v(" "),v("h3",{attrs:{id:"列表"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#列表"}},[t._v("#")]),t._v(" 列表")]),t._v(" "),v("p",[v("strong",[t._v("list")]),t._v(" 列表是简单的字符串列表，按照插入顺序排序。你可以添加一个元素到列表的头部（左边）或者尾部（右边）。")]),t._v(" "),v("blockquote",[v("p",[t._v("常用命令：lpush、rpush、lpop、rpop、lrange")]),t._v(" "),v("p",[t._v("应用场景：粉丝列表")])]),t._v(" "),v("h3",{attrs:{id:"集合"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#集合"}},[t._v("#")]),t._v(" 集合")]),t._v(" "),v("p",[v("strong",[t._v("set")]),t._v(" 是string类型的无序集合。集合是通过hashtable实现的，概念和数学中个的集合基本类似，可以交集，并集，差集等等，set中的元素是没有顺序的。所以添加，删除，查找的复杂度都是O(1)。")]),t._v(" "),v("blockquote",[v("p",[t._v("常用命令：sadd、spop、smembers、sunion")]),t._v(" "),v("p",[t._v("应用场景：当你需要存储一个列表数据，又不希望出现重复数据时，并且set提供了判断某个成员是否在一个set集合内的重要接口，这个也是list所不能提供的。")]),t._v(" "),v("p",[t._v("案例：在微博中，可以将一个用户所有的关注人存在一个集合中，将其所有粉丝存在一个集合。Redis还为集合提供了求交集、并集、差集等操作")])]),t._v(" "),v("h3",{attrs:{id:"有序集合"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#有序集合"}},[t._v("#")]),t._v(" 有序集合")]),t._v(" "),v("p",[v("strong",[t._v("zset")]),t._v(" 和 set 一样也是string类型元素的集合,且不允许重复的成员。")]),t._v(" "),v("blockquote",[v("p",[t._v("常用命令：zadd、zrange、zrem、zcard")]),t._v(" "),v("p",[t._v("应用场景：排行榜、")])]),t._v(" "),v("h3",{attrs:{id:"hash"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#hash"}},[t._v("#")]),t._v(" hash")]),t._v(" "),v("p",[t._v("是一个键值(key => value)对集合")]),t._v(" "),v("blockquote",[v("p",[t._v("常用命令：hget、hset、hgetall")]),t._v(" "),v("p",[t._v("应用场景：比如我们要存储一个用户信息对象数据，或者购物车等")])]),t._v(" "),v("p",[v("a",{attrs:{href:"https://juejin.cn/post/6844903951502934030",target:"_blank",rel:"noopener noreferrer"}},[t._v("相关链接"),v("OutboundLink")],1)]),t._v(" "),v("h2",{attrs:{id:"redis-和-memcached-有哪些区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis-和-memcached-有哪些区别"}},[t._v("#")]),t._v(" Redis 和 memcached 有哪些区别？")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("数据类型不同")]),t._v(" "),v("p",[t._v("redis支持 字符串、列表、集合、有序集合、哈希数据类型，还支持持久化")]),t._v(" "),v("p",[t._v("memcached 仅支持简单的 key/value 类型，不支持持久化")])]),t._v(" "),v("li",[v("p",[t._v("value 大小不同")]),t._v(" "),v("p",[t._v("redis 单个 value最大限制 1GB")]),t._v(" "),v("p",[t._v("memcached 带个 item 存储要小于1M")])]),t._v(" "),v("li",[v("p",[t._v("分布式存储")]),t._v(" "),v("p",[t._v("redis支持 master-slave 复制模式")]),t._v(" "),v("p",[t._v("memcached 可是使用一致性的hash做分布式")])])]),t._v(" "),v("h2",{attrs:{id:"redis-持久化有哪些-重点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis-持久化有哪些-重点"}},[t._v("#")]),t._v(" Redis 持久化有哪些？(重点)")]),t._v(" "),v("h3",{attrs:{id:"rdb"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#rdb"}},[t._v("#")]),t._v(" rdb")]),t._v(" "),v("p",[t._v("在一个的时间间隔内执行修改命令达到一定的数量，或者手动执行save和bgsave命令（"),v("u",[t._v("将某一时刻的时间生成快照存储在磁盘中")]),t._v("）")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("save：此命令会使用Redis的主线程进程同步存储，阻塞当前的Redis服务器，造成服务不可用，直到RDB过程完成。无论当前服务器数据量大小，线上不要用。")])]),t._v(" "),v("li",[v("p",[t._v("bgsave：此命令会通过fork()创建子进程，在后台进程存储。只有fork阶段会阻塞当前Redis服务器，不必到整个RDB过程结束，一般时间很短。因此Redis内部涉及到RDB都采用bgsave命令。")]),t._v(" "),v("blockquote",[v("p",[t._v("这里注意一点，无论RDB还是AOF，"),v("strong",[t._v("由于使用了写时复制，fork出来的子进程不需要拷贝父进程的物理内存空间")]),t._v("，但是会复制父进程的空间内存页表。")])])]),t._v(" "),v("li",[v("p",[t._v("自动触发：Redis支持自动触发RDB持久化机制，配置都在redis.conf文件里面")]),t._v(" "),v("blockquote",[v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("save 900 1\nsave 300 10\nsave 60 10000\n# save m n：代表Redis服务器在m秒内数据存在n次修改时，自动触发rdb。这个参数比较关键。\n")])])])])])]),t._v(" "),v("h4",{attrs:{id:"优缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#优缺点"}},[t._v("#")]),t._v(" 优缺点")]),t._v(" "),v("p",[t._v("RDB持久化方式的优点：")]),t._v(" "),v("ul",[v("li",[t._v("非常适合全量备份")]),t._v(" "),v("li",[t._v("恢复速度比AOF快")])]),t._v(" "),v("p",[t._v("RDB持久化方式的缺点：")]),t._v(" "),v("ul",[v("li",[t._v("RDB方式没有办法做到实时持久化")]),t._v(" "),v("li",[t._v("版本兼容RDB格式问题")])]),t._v(" "),v("h3",{attrs:{id:"aof"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#aof"}},[t._v("#")]),t._v(" aof")]),t._v(" "),v("p",[t._v("将redis更行命令写入到文件中，根据"),v("code",[t._v("appendfsync")]),t._v(" 配置选择写入类型")]),t._v(" "),v("blockquote",[v("p",[t._v("always 总是写入\neverysec 每秒写入\nno 根据操作系统来决定什么时候写入")])]),t._v(" "),v("p",[v("code",[t._v("fork")]),t._v("  采用了写时复制机制，子进程不能访问在其被创建出来之后访问产生的新数据，redis 使用"),v("code",[t._v("aof重写缓冲区")]),t._v(" 保存这部分新数据，最后父进程将aof重写缓冲区的数据写入新的aof文件中然后使用新的aof文件替换旧的文件")]),t._v(" "),v("h4",{attrs:{id:"优缺点-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#优缺点-2"}},[t._v("#")]),t._v(" 优缺点")]),t._v(" "),v("p",[t._v("AOF持久化方式的优点：")]),t._v(" "),v("ul",[v("li",[t._v("做到最多丢失1-2s内的数据（最多丢失2s数据，因为"),v("strong",[t._v("AOF追加阻塞")]),t._v("）")])]),t._v(" "),v("p",[t._v("AOF持久化方式的缺点：")]),t._v(" "),v("ul",[v("li",[t._v("AOF文件比RDB文件大")]),t._v(" "),v("li",[t._v("可能导致"),v("strong",[t._v("追加阻塞")])])]),t._v(" "),v("h3",{attrs:{id:"恢复数据优先级"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#恢复数据优先级"}},[t._v("#")]),t._v(" 恢复数据优先级")]),t._v(" "),v("p",[t._v("Redis中，AOF恢复的优先级最高，如果同时配置了RDB和AOF，会只进行AOF的恢复")]),t._v(" "),v("p",[t._v("如果只配置 RDB，Redis会去配置的dir下面找文件并恢复数据。")]),t._v(" "),v("p",[t._v("相关链接：https://juejin.cn/post/6925575870027399175")]),t._v(" "),v("h3",{attrs:{id:"rdb-和-aof-的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#rdb-和-aof-的区别"}},[t._v("#")]),t._v(" rdb 和 aof 的区别")]),t._v(" "),v("ul",[v("li",[t._v("rdb：保存了某一时刻的所有数据，恢复速度快，但是会丢失一些数据")]),t._v(" "),v("li",[t._v("aof：保存了所有修改的执行命令，颗粒度更新，恢复数据更全，但是效率比较低，更消耗时间，随着时间的增长，修改命令越来越多，备份文件就会越来越大")])]),t._v(" "),v("p",[t._v("相关链接：https://www.cnblogs.com/GrimMjx/p/10695512.html")]),t._v(" "),v("h3",{attrs:{id:"如何防止-aof-文件过大"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何防止-aof-文件过大"}},[t._v("#")]),t._v(" 如何防止 aof 文件过大？")]),t._v(" "),v("p",[t._v("使用 redis 重写机制：")]),t._v(" "),v("ul",[v("li",[t._v("多条写入命令合并成一条命令，（"),v("strong",[t._v("4.0 之前的Redis重写是通过删除抵消与合并命令来达到重写的。Redis在4.0后使用了新的重写机制，将RDB与AOF两种方式进行了混合")]),t._v("）")]),t._v(" "),v("li",[t._v("重写后 aof 文件只保留最终的写入命令")])]),t._v(" "),v("h2",{attrs:{id:"如何解决数据库和redis-数据不一致问题-未确定"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何解决数据库和redis-数据不一致问题-未确定"}},[t._v("#")]),t._v(" 如何解决数据库和redis 数据不一致问题？（"),v("em",[v("u",[t._v("未确定")])]),t._v("）")]),t._v(" "),v("h2",{attrs:{id:"redis-是单线程还是多线程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis-是单线程还是多线程"}},[t._v("#")]),t._v(" Redis 是单线程还是多线程?")]),t._v(" "),v("ul",[v("li",[t._v("版本4.0之前使用的是单线程，")]),t._v(" "),v("li",[t._v("版本4.0严格意义上来说也不是单线程，而是负责客户端处理请求的线程是单线程，但是开始加了点多线程的东西（"),v("strong",[t._v("异步删除")]),t._v("）")]),t._v(" "),v("li",[t._v("最新版本的6.0.x后，告别了刻板印象中的单线程，"),v("strong",[t._v("而采用了一种全新的多线程来解决问题。")])])]),t._v(" "),v("p",[t._v("相关链接：https://juejin.cn/post/7068574407748222989")]),t._v(" "),v("h2",{attrs:{id:"redis-性能快的原因是什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis-性能快的原因是什么"}},[t._v("#")]),t._v(" Redis 性能快的原因是什么？")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("基于内存操作")]),t._v("，Redis的所有数据都存在内存中，因此所有的运算都是内存级别的，所以他的性能比较高。")]),t._v(" "),v("li",[v("strong",[t._v("数据结构简单")]),t._v("：Redis的数据结构都是专门设计的，而这些简单的数据结构的查找和操作的时间大部分复杂度都是O（1），因此性能比较强")]),t._v(" "),v("li",[v("strong",[t._v("多路复用和非阻塞I/O")]),t._v("，Redis使用I/O多路复用来监听多个socket链接客户端，这样就可以使用一个线程链接来处理多个请求，减少线程切换带来的开销，同时也避免了I/O阻塞操作。")]),t._v(" "),v("li",[v("strong",[t._v("主线程为单线程，避免上下文切换")]),t._v("，因为是单线程模型，因此避免了不必要的上下文切换和多线程竞争（比如锁），这就省去了多线程切换带来的时间和性能上的消耗，而且单线程不会导致死锁问题的发生。")])]),t._v(" "),v("h2",{attrs:{id:"redis-瓶颈在哪里"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis-瓶颈在哪里"}},[t._v("#")]),t._v(" Redis 瓶颈在哪里？")]),t._v(" "),v("p",[v("strong",[t._v("内存大小和网络IO才有可能是redis的瓶颈")])]),t._v(" "),v("h2",{attrs:{id:"什么是-redis-多路复用-未确定"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是-redis-多路复用-未确定"}},[t._v("#")]),t._v(" 什么是 redis 多路复用？（"),v("em",[t._v("未确定")]),t._v("）")]),t._v(" "),v("h2",{attrs:{id:"b树和b-树的区别-重点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#b树和b-树的区别-重点"}},[t._v("#")]),t._v(" B树和B+树的区别？（重点）")]),t._v(" "),v("ul",[v("li",[t._v("B树的每个节点都存储了key和data，而B+树的data存储在叶子节点上。\nB+树非叶子节点仅存储key不存储data，这样一个节点就可以存储更多的key。可以使得B+树相对B树来说更矮（IO次数就是树的高度），所以与磁盘交换的IO操作次数更少")]),t._v(" "),v("li",[t._v("B+树所有叶子节点构成一个有序链表，按主键排序来遍历全部记录，能更好支持范围查找。 由于数据顺序排列并且相连，所以便于区间查找和搜索。而B树则需要进行每一层的递归遍历，相邻的元素可能在内存中不相邻，所以缓存命中性没有B+树好。")]),t._v(" "),v("li",[t._v("B+树所有的查询都要从根节点查找到叶子节点，查询性能更稳定；而B树，每个节点都可能查找到数据，需要在叶子节点和内部节点不停的往返移动，所以不稳定。")])]),t._v(" "),v("p",[t._v("相关链接：https://blog.csdn.net/qq_37102984/article/details/119646611")]),t._v(" "),v("h2",{attrs:{id:"nginx-反向代理和正向代理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#nginx-反向代理和正向代理"}},[t._v("#")]),t._v(" nginx 反向代理和正向代理")]),t._v(" "),v("ul",[v("li",[t._v("反向代理：反向代理是一个web 服务器，它接收客户端的连接请求，然后将请求转发给上游服务器，并将从服务器得到的结果返回给连接的客户端（比如：负载均衡）")]),t._v(" "),v("li",[t._v("正向代理：正向代理是一个位于客户端和目标服务器之间的代理服务器(中间服务器)，客户端需要设置才可以使用（比如：翻墙）")])]),t._v(" "),v("p",[t._v("相关链接：https://juejin.cn/post/6844904064266960903#heading-5")]),t._v(" "),v("h2",{attrs:{id:"cig、fastcgi、php-cgi、php-fpm区别和关系-重点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cig、fastcgi、php-cgi、php-fpm区别和关系-重点"}},[t._v("#")]),t._v(" cig、fastcgi、php-cgi、php-fpm区别和关系？(重点)")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("cgi：公共网关接口")]),t._v(" "),v("p",[t._v("它是Web服务器与外部应用程序（CGI程序）之间传递信息的接口标准。通过CGI接口，Web服务器就能够获取客户端提交的信息，并转交给服务器端的CGI程序处理，最后返回结果给客户端。\n也就是说，CGI实际上是一个接口标准。我们通常所说的CGI是指CGI程序，即实现了CGI接口标准的程序。")]),t._v(" "),v("blockquote",[v("p",[v("strong",[t._v("CGI程序的工作方式：")]),t._v("\nWeb服务器一般只处理静态文件请求（如 jpg、htm、html），如果碰到一个动态脚本请求（如php），web服务器主进程，就fork出一个新的进程来启动CGI程序，也就是说将动态脚本请求交给CGI程序来处理。启动CGI程序需要一个过程，比如，读取配置文件，加载扩展等。CGI程序启动后，就会解析动态脚本，然后将结果返回给Web服务器，最后Web服务器再将结果返回给客户端，刚才fork的进程也会随之关闭。\n这样，每次用户请求动态脚本，Web服务器都要重新fork一个新进程，去启动CGI程序，由CGI程序来处理动态脚本，处理完后进程随之关闭。")])])]),t._v(" "),v("li",[v("p",[t._v("fastcgi：")]),t._v(" "),v("p",[t._v("FastCGI就像是一个常驻（long-live）型的CGI程序，它可以一直运行着。FastCGI程序也可以和Web服务器分别部署在不同的主机上，它还可以接受来自其他Web服务器的请求。\nFastCGI也是语言无关的。其主要行为是将CGI解释器进程保持在内存中并因此获得高效的性能。众所周知，CGI解释器的反复加载是CGI性能低下的主要原因。\n"),v("strong",[v("u",[t._v("FastCGI是一种进程管理工具，它可以在内存中管理CGI进程")]),t._v("。")]),t._v(" "),v("u",[v("strong",[t._v("FastCGI进程管理器需要单独启动。启动FastCGI后，会生成一个FastCGI主进程和多个子进程（子进程其实就是CGI解释器进程[php-cgi]）")])]),t._v("。")]),t._v(" "),v("p",[t._v("当客户端请求Web服务器上的动态脚本时，Web服务器会将动态脚本通过TCP协议交给FastCGI主进程，FastCGI主进程根据情况，安排一个空闲的子进程来解析动态脚本，处理完成后将结果返回给Web服务器，Web服务器再将结果返回给客户端。该客户端请求处理完毕后，FastCGI子进程并不会随之关闭，而是继续等待主进程安排工作任务")]),t._v(" "),v("blockquote",[v("p",[v("strong",[t._v("FastCGI的重要特点：")]),t._v("\n1、FastCGI是HTTP服务器和动态脚本语言间通信的接口或者工具。\n2、FastCGI优点是把动态语言解析和HTTP服务器分离开来。\n3、Nginx、Apache、Lighttpd以及多数动态语言都支持FastCGI。\n4、FastCGI接口方式采用C/S架构，分为客户端（HTTP服务器）和服务端（动态语言解析服务器）。\n5、PHP动态语言服务端可以启动多个FastCGI的守护进程。")]),t._v(" "),v("p",[t._v("6、HTTP服务器通过FastCGI客户端和动态语言FastCGI服务端通信。")])])]),t._v(" "),v("li",[v("p",[t._v("php-fpm：php-fpm就是php中的FastCGI进程管理器。")])])]),t._v(" "),v("p",[t._v("相关链接：https://blog.51cto.com/u_15230485/2821111")]),t._v(" "),v("h2",{attrs:{id:"nginx-与-php-fpm-有哪些通讯方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#nginx-与-php-fpm-有哪些通讯方式"}},[t._v("#")]),t._v(" nginx 与 php-fpm 有哪些通讯方式？")]),t._v(" "),v("ul",[v("li",[t._v("tcp socket：的优点是可以跨服务器，当 nginx 和 php-fpm 不在同一台机器上时，只能使用这种方式。")]),t._v(" "),v("li",[t._v("unix socket：又叫 IPC (inter-process communication 进程间通信) socket，用于实现同一主机上的进程间通信，这种方式需要在 nginx 配置文件中填写 php-fpm 的 socket\n文件位置。")])]),t._v(" "),v("h2",{attrs:{id:"php-fpm-进程管理方式有哪些"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#php-fpm-进程管理方式有哪些"}},[t._v("#")]),t._v(" php-fpm 进程管理方式有哪些？")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("动态（dynamic）：则进程数是动态的，最开始是pm.start_servers指定的数量，如果请求较多，则会自动增加，但不超过\npm.max_children指定的数量，同时保证空闲的进程数不小于pm.min_spare_servers，如果进程数较多，也会进行相应清理， 保证多余的进程数不多于pm.max_spare_servers。")]),t._v(" "),v("blockquote",[v("h3",{attrs:{id:"优点-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#优点-2"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),v("ol",[v("li",[t._v("动态扩容，不浪费系统资源。")])]),t._v(" "),v("h3",{attrs:{id:"缺点-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#缺点-2"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),v("ol",[v("li",[t._v("当所有的 worker 进程都在工作时，新的请求到来需要等待创建 worker 进程，最长等待 1s（内部存在一个 1s 的定时器，去查看，创建进程）。")]),t._v(" "),v("li",[t._v("会频繁的启动停止进程，消耗系统资源（当请求数稳定时，不需要频繁销毁）；")])]),t._v(" "),v("h3",{attrs:{id:"限制条件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#限制条件"}},[t._v("#")]),t._v(" 限制条件")]),t._v(" "),v("ol",[v("li",[t._v("worker 进程的数量受限于 "),v("code",[t._v("pm.max_children")]),t._v(" 配置，同时受限于全局配置 "),v("code",[t._v("process.max")])])])])]),t._v(" "),v("li",[v("p",[t._v("静态（static）：进程数自始至终都是pm.max_children指定的数量")]),t._v(" "),v("blockquote",[v("h3",{attrs:{id:"优点-3"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#优点-3"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),v("ol",[v("li",[t._v("方法简单；")]),t._v(" "),v("li",[t._v("避免了频繁开启关闭进程的开销；")])]),t._v(" "),v("h3",{attrs:{id:"缺点-3"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#缺点-3"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),v("ol",[v("li",[t._v("如果配置成 static，只需要考虑 max_children 数量，数量取决于 CPU 的个数和应用的响应时间，一次启动固定大小进程浪费系统资源。")])]),t._v(" "),v("h3",{attrs:{id:"限制条件-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#限制条件-2"}},[t._v("#")]),t._v(" 限制条件")]),t._v(" "),v("ol",[v("li",[t._v("worker 进程的数量受限于全局配置 "),v("code",[t._v("process.max")])])])])])]),t._v(" "),v("p",[t._v("相关链接：https://juejin.cn/post/7018583928978014245")]),t._v(" "),v("h2",{attrs:{id:"三次握手四次挥手-未确定"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三次握手四次挥手-未确定"}},[t._v("#")]),t._v(" 三次握手四次挥手（未确定）")]),t._v(" "),v("p",[t._v("三次握手：\n"),v("img",{attrs:{src:"https://cdn.learnku.com/uploads/images/202103/09/77063/mzFPO1kInI.jpeg",alt:"img"}})]),t._v(" "),v("p",[t._v("四次挥手\n"),v("img",{attrs:{src:"https://cdn.learnku.com/uploads/images/202103/09/77063/mzFPO1kInI.jpeg",alt:"img"}})]),t._v(" "),v("p",[t._v("相关链接：https://learnku.com/articles/55099")]),t._v(" "),v("h2",{attrs:{id:"为什么innodb使用b-树而不是b树"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么innodb使用b-树而不是b树"}},[t._v("#")]),t._v(" 为什么InnoDB使用B+树而不是B树？")]),t._v(" "),v("ul",[v("li",[t._v("B+树的叶子节点只存储关键字和指向数据的指针，而B树的叶子节点存储的是关键字和数据。这意味着B+树的内部节点可以存储更多的关键字，减少了树的高度，提高了查询效率。")]),t._v(" "),v("li",[t._v("B+树的所有数据都存储在叶子节点中，而B树的数据分布在所有节点中。这使得B+树的遍历更加高效，因为只需要遍历叶子节点。")]),t._v(" "),v("li",[t._v("B+树的叶子节点形成一个有序链表，方便范围查询和排序操作。")]),t._v(" "),v("li",[t._v("B+树更适合磁盘存储，因为它的内部节点可以存储更多的关键字，减少了磁盘I/O操作的次数。")])]),t._v(" "),v("p",[t._v("综上所述，InnoDB使用B+树而不是B树，是为了提高查询效率和适应磁盘存储。")]),t._v(" "),v("ul",[v("li")]),t._v(" "),v("p",[t._v("B+树非叶子节点上存储的是索引信息，包括指向子节点的指针和对应的索引值。对于一个非叶子节点，它的索引值是由其子节点中最大的索引值来决定的，这样可以保证B+树的有序性。非叶子节点的指针指向的是比其索引值小的子节点，这样可以在B+树中进行范围查询。")]),t._v(" "),v("ul",[v("li",[t._v("非叶子节点的数量通常比叶子节点少得多，因为它们的主要作用是作为索引来加速查询，而不是存储数据。在B+树中，非叶子节点通常被存储在内存中，因为它们的大小相对较小，而叶子节点则存储在磁盘上，因为它们的大小相对较大。")])]),t._v(" "),v("p",[t._v("总之，B+树的非叶子节点上存储的是索引信息，用于加速查询和保证B+树的有序性。")]),t._v(" "),v("h2",{attrs:{id:"sql-中-in-和-exists-的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#sql-中-in-和-exists-的区别"}},[t._v("#")]),t._v(" SQL 中 "),v("code",[t._v("in")]),t._v(" 和 "),v("code",[t._v("exists")]),t._v(" 的区别？")]),t._v(" "),v("ul",[v("li",[t._v("in 是把外表和内表作 hash 连接，")]),t._v(" "),v("li",[t._v("exists 是对外表作 loop 循环，每次 loop 循环再对内表进行查询。")])]),t._v(" "),v("p",[v("strong",[t._v("如果查询的两个表大小相当，那么用 in 和 exists 差别不大；如果两个表中一个较小一个较大，则子查询表大的用 exists，子查询表小的用 in；")])]),t._v(" "),v("h2",{attrs:{id:"一条sql的执行过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一条sql的执行过程"}},[t._v("#")]),t._v(" 一条SQL的执行过程")]),t._v(" "),v("p",[t._v("连接器>缓存(sql版本5.6关闭，8.0之后删除)>分析器（分析sql语句是否正常，表、字段是否存在）>优化器（比如：调整sql顺序或者使用最优索引）>执行器>写入缓存")]),t._v(" "),v("p",[t._v("相关链接：https://www.cnblogs.com/mengxinJ/p/14045520.html")]),t._v(" "),v("p",[t._v("相关链接：https://pdai.tech/md/db/sql-mysql/sql-mysql-execute.html#%E5%89%8D%E8%A8%80")]),t._v(" "),v("h2",{attrs:{id:"如何防止事物并发产生死锁情况"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何防止事物并发产生死锁情况"}},[t._v("#")]),t._v(" 如何防止事物并发产生死锁情况")]),t._v(" "),v("ul",[v("li",[t._v("将大事物拆分成小事物")]),t._v(" "),v("li",[t._v("在同一个事物操作中，尽可能的快的完成操作")]),t._v(" "),v("li",[t._v("尽可能减小锁住的行数据，走主键ID或者索引进行更新。")])]),t._v(" "),v("h2",{attrs:{id:"http1-0-和-http2-0-的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http1-0-和-http2-0-的区别"}},[t._v("#")]),t._v(" http1.0 和 http2.0 的区别？")]),t._v(" "),v("ul",[v("li",[t._v("http1.* ：一次请求-响应，建立一个链接，用完关闭，每个请求都要建立一次链接。")]),t._v(" "),v("li",[t._v("http2：多个请求可同时在一个链接上并行执行，某个请求任务超时不会影响其他链接的正常执行")])]),t._v(" "),v("h2",{attrs:{id:"http-和-https-的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-和-https-的区别"}},[t._v("#")]),t._v(" http 和 https 的区别？")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("http")]),t._v(" "),v("th",[t._v("https")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("http使用的是80")]),t._v(" "),v("td",[t._v("https使用的是443")])]),t._v(" "),v("tr",[v("td",[t._v("http 协议运行在 tcp 上面的，所有的数据传输都是没明文")]),t._v(" "),v("td",[t._v("https是运行在 ssl/tls 只上的，所有的数据传输都经过加密")])]),t._v(" "),v("tr",[v("td",[t._v("不需要证书")]),t._v(" "),v("td",[t._v("需要证书")])])])]),t._v(" "),v("p",[t._v("相关链接：https://github.com/febobo/web-interview/issues/134")]),t._v(" "),v("h2",{attrs:{id:"php-有哪几种运行方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#php-有哪几种运行方式"}},[t._v("#")]),t._v(" PHP 有哪几种运行方式？")]),t._v(" "),v("ul",[v("li",[t._v("cgi（通用网关接口）")]),t._v(" "),v("li",[t._v("fast-cgi（常驻型的cgi）")]),t._v(" "),v("li",[t._v("cli（命令行运行）")]),t._v(" "),v("li",[t._v("web模式 （apache运行模式）")])]),t._v(" "),v("h2",{attrs:{id:"define-和-const-的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#define-和-const-的区别"}},[t._v("#")]),t._v(" define 和 const 的区别？")]),t._v(" "),v("ul",[v("li",[t._v("define是在编译的预处理阶段起作用，而const是在 编译、运行的时候起作用。")]),t._v(" "),v("li",[t._v("define 没有数据类型，const 有数据类型")]),t._v(" "),v("li",[t._v("define 不能进行调试，在编译预处理阶段就已经替换掉，const 可以进行调试")])]),t._v(" "),v("p",[t._v("相关链接：https://blog.csdn.net/weibo1230123/article/details/81981384")]),t._v(" "),v("h2",{attrs:{id:"get-和-post-的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#get-和-post-的区别"}},[t._v("#")]),t._v(" GET 和 Post 的区别？")]),t._v(" "),v("ul",[v("li",[t._v("GET在浏览器回退时是无害的，而POST会再次提交请求。")]),t._v(" "),v("li",[t._v("GET产生的URL地址可以被Bookmark，而POST不可以。")]),t._v(" "),v("li",[t._v("GET请求会被浏览器主动cache，而POST不会，除非手动设置。")]),t._v(" "),v("li",[t._v("GET请求只能进行url编码，而POST支持多种编码方式。")]),t._v(" "),v("li",[t._v("GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留。")]),t._v(" "),v("li",[t._v("GET请求在URL中传送的参数是有长度限制的，而POST没有。")]),t._v(" "),v("li",[t._v("对参数的数据类型，GET只接受ASCII字符，而POST没有限制。")]),t._v(" "),v("li",[t._v("GET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息。")]),t._v(" "),v("li",[t._v("GET参数通过URL传递，POST放在Request body中")]),t._v(" "),v("li",[v("strong",[t._v("GET 会发送一次数据包，将header 和data 一起发送到服务器响应200，POST会发送两次第一次发送header，服务器响应100之后在发送data数据，服务器响应200（火狐浏览器除外，post 也会发送一次数据包）")])])]),t._v(" "),v("p",[t._v("相关链接：https://github.com/febobo/web-interview/issues/145")]),t._v(" "),v("h2",{attrs:{id:"laravel"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#laravel"}},[t._v("#")]),t._v(" Laravel")]),t._v(" "),v("h3",{attrs:{id:"什么是-facades-什么是-contracts"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是-facades-什么是-contracts"}},[t._v("#")]),t._v(" 什么是 Facades? 什么是 Contracts?")]),t._v(" "),v("ul",[v("li",[t._v("Facades：为应用程序的服务容器提供了一个静态接口。服务器容器的代理，可以方便调用服务容器中的实现类。")]),t._v(" "),v("li",[t._v("Contracts：是一组接口，可以调用服务容器中实现了指定接口的实现类，他们定义框架的核心服务。")])]),t._v(" "),v("h2",{attrs:{id:"udp和tcp的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#udp和tcp的区别"}},[t._v("#")]),t._v(" UDP和TCP的区别")]),t._v(" "),v("p",[t._v("TCP协议是有连接的，有连接的意思是开始传输实际数据之前TCP的客户端和服务器端必须通过三次握手建立连接，会话结束之后也要结束连接。而UDP是无连接的 •\nTCP协议保证数据按序发送，按序到达，提供超时重传来保证可靠性，但是UDP不保证按序到达，甚至不保证到达，只是努力交付，即便是按序发送的序列，也不保证按序送到。 •\nTCP协议所需资源多，TCP首部需20个字节（不算可选项），UDP首部字段只需8个字节。 • TCP有流量控制和拥塞控制，UDP没有，网络拥堵不会影响发送端的发送速率 •\nTCP是一对一的连接，而UDP则可以支持一对一，多对多，一对多的通信。 • TCP面向的是字节流的服务，UDP面向的是报文的服务。")]),t._v(" "),v("p",[t._v("相关链接：https://www.jianshu.com/p/d277cd24e98c")]),t._v(" "),v("h2",{attrs:{id:"redis-雪崩、内存穿透、内存击穿"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis-雪崩、内存穿透、内存击穿"}},[t._v("#")]),t._v(" redis 雪崩、内存穿透、内存击穿")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("雪崩：redis中大量的key同时达到过期时间，所有的请求无法命中"),v("code",[t._v("Redis")]),t._v("中的缓存数据")]),t._v(" "),v("blockquote",[v("p",[t._v("解决方法：")]),t._v(" "),v("ul",[v("li",[t._v("大量缓存数据同时过期：给过期时间添加随机值")]),t._v(" "),v("li",[t._v("redis服务去宕机：提前搭好redis的主从服务进行数据同步。如果主服务无法提供服务，从服务可以顶替主服务继续使用")])])])]),t._v(" "),v("li",[v("p",[t._v("穿透：查找的数据既不在缓存当中，也不在数据库中。")]),t._v(" "),v("p",[t._v("可以使用布隆过滤器解决缓存穿透的问题，把已存在数据的key存在布隆过滤器中。当有新的请求时，先到布隆过滤器中查询是否存在，如果不存在该条数据直接返回；如果存在该条数据再查询缓存查询数据库。")]),t._v(" "),v("blockquote",[v("p",[t._v("解决方法：")]),t._v(" "),v("ul",[v("li",[t._v("对空值进行缓存并设置过期时间。防止后续其他请求继续请求该key继续查询不存在的数据。")]),t._v(" "),v("li",[t._v("使用布隆过滤器")])])])]),t._v(" "),v("li",[v("p",[t._v("击穿：大量请求热点数据key，但是key过期")]),t._v(" "),v("blockquote",[v("p",[t._v("解决方法：")]),t._v(" "),v("ul",[v("li",[t._v("不设置过期时间")]),t._v(" "),v("li",[t._v("互斥锁，只允许获取锁的请求才可以进行数据库查询并将结果存在缓存中，其他请求等待数据就绪。")])])])])]),t._v(" "),v("p",[t._v("三者出现的根本原因：Redis命中率下降，请求直接打在DB上")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("问题")]),t._v(" "),v("th",[t._v("原因")]),t._v(" "),v("th",[t._v("解决方法")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("缓存雪崩")]),t._v(" "),v("td",[t._v("大量数据过期或"),v("code",[t._v("Redis")]),t._v("服务器宕机")]),t._v(" "),v("td",[t._v("1. 随机过期时间 2. 主从+哨兵的集群")])]),t._v(" "),v("tr",[v("td",[t._v("缓存击穿")]),t._v(" "),v("td",[t._v("热点数据过期")]),t._v(" "),v("td",[t._v("1. 不设置过期时间 2. 加互斥锁 3. 冗余逻辑过期时间")])]),t._v(" "),v("tr",[v("td",[t._v("缓存穿透")]),t._v(" "),v("td",[t._v("请求数据库和"),v("code",[t._v("Redis")]),t._v("都没有的数据")]),t._v(" "),v("td",[t._v("1. 缓存空值或缺省值 2. 布隆过滤器")])])])]),t._v(" "),v("p",[t._v("相关链接:https://blog.csdn.net/m0_71777195/article/details/127688572")]),t._v(" "),v("h3",{attrs:{id:"布隆过滤器有什么特性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#布隆过滤器有什么特性"}},[t._v("#")]),t._v(" 布隆过滤器有什么特性")]),t._v(" "),v("p",[v("strong",[t._v("Redis 4.0开始以插件形式提供布隆过滤器")])]),t._v(" "),v("ul",[v("li",[t._v("检查一个元素是否存在集合中")]),t._v(" "),v("li",[t._v("有一定的误差")]),t._v(" "),v("li",[t._v("查询结果有两种：一定不存在集合中，可能存在于集合中")]),t._v(" "),v("li",[t._v("不支持删除元素")]),t._v(" "),v("li",[t._v("查询速度快，内存小")])]),t._v(" "),v("h2",{attrs:{id:"laravel-ioc-控制反转-、-di-依赖注入-、facade-面门-、contracts-契约"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#laravel-ioc-控制反转-、-di-依赖注入-、facade-面门-、contracts-契约"}},[t._v("#")]),t._v(" laravel IoC(控制反转)、 DI(依赖注入)、Facade(面门)、contracts(契约)")]),t._v(" "),v("h3",{attrs:{id:"什么是依赖注入和控制反转"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是依赖注入和控制反转"}},[t._v("#")]),t._v(" 什么是依赖注入和控制反转？")]),t._v(" "),v("p",[t._v("具体含义是:当某个角色(可能是一个PHP实例，调用者)需要另一个角色(另一个PHP实例，被调用者)的协助时，在\n传统的程序设计过程中，通常由调用者来创建被调用者的实例。但在laravel里，创建被调用者的工作不再由调用者来完成，因此称为控制反转；创建被调用者实例的工作通常由laravel容器来完成，然后注入调用者，因此也称为依赖注入。")]),t._v(" "),v("p",[t._v("相关链接：https://blog.csdn.net/chenrui310/article/details/100079832")]),t._v(" "),v("h2",{attrs:{id:"rabbitmq-交换器有哪几种类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq-交换器有哪几种类型"}},[t._v("#")]),t._v(" Rabbitmq 交换器有哪几种类型？")]),t._v(" "),v("ul",[v("li",[t._v("topic：通配符模式")]),t._v(" "),v("li",[t._v("direct：路由键匹配模式")]),t._v(" "),v("li",[t._v("fanout：广播模式")])]),t._v(" "),v("h2",{attrs:{id:"使用rabbitmq有什么好处"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#使用rabbitmq有什么好处"}},[t._v("#")]),t._v(" 使用RabbitMQ有什么好处？")]),t._v(" "),v("p",[t._v("1、 解耦，系统A在代码中直接调用系统B和系统C的代码，如果将来D系统接入，系统A还需要修改代码，过于麻烦！")]),t._v(" "),v("p",[t._v("2、 异步，将消息写入消息队列，非必要的业务逻辑以异步的方式运行，加快响应速度")]),t._v(" "),v("p",[t._v("3、 削峰，并发量大的时候，所有的请求直接怼到数据库，造成数据库连接异常")]),t._v(" "),v("h2",{attrs:{id:"rabbitmq-更多面试题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq-更多面试题"}},[t._v("#")]),t._v(" Rabbitmq 更多面试题")]),t._v(" "),v("p",[t._v("相关链接：https://blog.csdn.net/yanpenglei/article/details/120862224")]),t._v(" "),v("h2",{attrs:{id:"rabbitmq-和-redis-的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq-和-redis-的区别"}},[t._v("#")]),t._v(" Rabbitmq 和 redis 的区别？")]),t._v(" "),v("ul",[v("li",[t._v("可靠消费 Redis：没有相应的机制保证消息的消费，当消费者消费失败的时候，消息体丢失，需要手动处理 RabbitMQ：具有消息消费确认，即使消费者消费失败，也会自动使消息体返回原队列，同时可全程持久化，保证消息体被正确消费")]),t._v(" "),v("li",[t._v("高可用 Redis：采用主从模式，读写分离，但是故障转移还没有非常完善的官方解决方案 RabbitMQ：集群采用磁盘、内存节点，任意单点故障都不会影响整个队列的操作")]),t._v(" "),v("li",[t._v("持久化 Redis：将整个Redis实例持久化到磁盘 RabbitMQ：队列，消息，都可以选择是否持久化")])]),t._v(" "),v("p",[t._v("相关链接：https://blog.csdn.net/weixin_43783509/article/details/89957704")])])}),[],!1,null,null,null);v.default=s.exports}}]);