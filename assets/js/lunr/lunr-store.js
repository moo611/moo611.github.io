var store = [{
        "title": "分布式发布订阅系统的设计与实现（一）",
        "excerpt":"引言   分布式消息订阅系统是一种用于处理和分发消息的架构，旨在实现高效、可靠的信息传递。该系统主要由三个组件组成：代理、发布者和订阅者。   主要组件   1. 代理   代理是分布式消息订阅系统的核心，负责管理主题、订阅和消息分发。代理节点相互连接，形成一个网络，管理主题创建、主题列表、订阅者列表和消息路由，确保消息能够在不同的主题和订阅者之间有效地传递。   2. 发布者   发布者是客户端系统，负责创建主题并向主题发布消息。发布者可以是任何能够发送消息的应用程序或服务。发布者具体的功能：   1、创建新主题：生成唯一的主题 ID（例如 UUID）并分配名称（不一定是唯一的，因为多个发布者可能有同名的主题）。   2、向已有的 Topic 发布消息：通过 Topic 的 Broker 发送消息，使用唯一的主题 ID。该消息应发送给所有主题订阅者。每条消息将被限制最多 100 个字符。不需要在任何代理中保留消息。   3、显示订阅者计数：显示与此相关的每个主题的订阅者总数。   4、删除主题：从系统中删除该主题并自动取消订阅所有当前订阅抄写员。应向每个订阅者发送一条通知消息。   3. 订阅者   订阅者是通过代理订阅特定主题来表达兴趣的客户。他们从代理节点那里接收有关这些主题的实时消息。订阅者具体的功能：   1、列出所有可用主题：检索经纪网络中所有可用主题的列表，包括主题 ID、主题名称和发布者名称。   2、订阅主题：使用主题的唯一 ID 订阅主题。订阅者将收到关于此主题的所有未来消息。   3、显示当前订阅：列出活动订阅，包括主题 ID、主题名称和发布者姓名。   4、取消订阅主题：停止接收来自主题的消息。代理发送通知确认取消订阅的消息      设计思路   1、无论是结点和发布者、订阅者之间的通信，还是结点之间的通信，都基于socket。      2、创建一个线程，来实现消息订阅者、发布者之间的通信。创建一个主题类，用于存储订阅者，确保发布者往该主题发布消息时，能通知该主题下的订阅者。   3、创建另一个线程，来实现多个结点互连。当一个结点收到指令的时候，确保其他的结点也接收到通知，来保证消息的同步性。   基于以上的思路，我们逐步实现这一系统。具体的实现将在下一篇介绍。   ","categories": [],
        "tags": [],
        "url": "/2024/09/30/%E5%88%86%E5%B8%83%E5%BC%8F%E5%8F%91%E5%B8%83%E8%AE%A2%E9%98%85%E7%B3%BB%E7%BB%9F%E7%9A%84%E8%AE%BE%E8%AE%A1%E4%B8%8E%E5%AE%9E%E7%8E%B0-%E4%B8%80.html",
        "teaser": null
      },{
        "title": "分布式发布订阅系统的设计与实现（二）",
        "excerpt":"系统架构概述 在单节点环境下，代理（broker）负责协调发布者和订阅者的交互，存储消息并负责将消息推送给已订阅的客户端。整体流程如下： 发布者将消息发布到指定的主题（Topic）。 代理接收到消息后，根据主题找到对应的订阅者。 代理将消息推送至所有订阅该主题的订阅者。 实现细节 1. 发布者实现 发布者是客户端系统，负责创建主题并向主题发布消息。发布者可以是任何能够发送消息的应用程序或服务。 package com.example.broker; import java.io.*; import java.net.*; import java.util.Arrays; import java.util.UUID; public class Publisher { static String username; public static void main(String[] args) throws IOException { if (args.length &lt; 3) { System.out.println(\"Usage: java -jar publisher.jar &lt;username&gt; &lt;broker_ip&gt; &lt;broker_port&gt;\"); return; } username =...","categories": [],
        "tags": [],
        "url": "/2024/09/30/%E5%88%86%E5%B8%83%E5%BC%8F%E5%8F%91%E5%B8%83%E8%AE%A2%E9%98%85%E7%B3%BB%E7%BB%9F%E7%9A%84%E8%AE%BE%E8%AE%A1%E4%B8%8E%E5%AE%9E%E7%8E%B0-%E4%BA%8C.html",
        "teaser": null
      }]
