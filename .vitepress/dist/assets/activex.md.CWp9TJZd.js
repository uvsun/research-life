import{_ as e,a as t,b as a,c as i}from"./chunks/shelter.BB9Ym_J1.js";import{_ as o,c as r,o as c,a5 as s}from"./chunks/framework.BGue-vwX.js";const b=JSON.parse('{"title":"基于AcitveX实现的硬件控制系统","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"activex.md","filePath":"activex.md"}'),l={name:"activex.md"},p=s('<h1 id="基于acitvex实现的硬件控制系统" tabindex="-1">基于AcitveX实现的硬件控制系统 <a class="header-anchor" href="#基于acitvex实现的硬件控制系统" aria-label="Permalink to &quot;基于AcitveX实现的硬件控制系统&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">INFO</p><p>本文仅作简单介绍，具体细节详见<a href="/research-life/activexppt">PPT</a></p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>当然也可以看<a href="#具体应用">演示视频</a></p></div><h2 id="背景" tabindex="-1">背景 <a class="header-anchor" href="#背景" aria-label="Permalink to &quot;背景&quot;">​</a></h2><p>现有的硬件控制（例如获取传感器信息，操控灯，乃至控制机械臂、车及机器人等等），往往需要完整的嵌入式开发来实现，包括电路设计、硬件设计、软件设计等等。作为非专业的工程人员使用时必须依赖硬件提供方的指定程序，例如使用应变采集仪对应的程序、使用全站仪对应的网络控制程序及使用小米的米家软件控制米家硬件等等。对于普通用户而言，较为方便。</p><p>但对于科研人员而言，其程序存在诸多限制，无法完成对其专业性分析的需求。例如分析混凝土养护过程中温度和湿度的变化，需要以小时为单位的取样，市场上常见的程序难以达到科研需求。再例如，公路野外监测施工用的全站仪需要保护罩定时开启关闭，乃至需要外人靠近关闭并报警等等。</p><p>对此现有的硬件控制系统存在三个问题：</p><ol><li>专业性门槛高；</li><li>开放性不足，数据难以复用；</li><li>硬件间协同困难。</li></ol><h2 id="actviex及esp32介绍" tabindex="-1">ActvieX及ESP32介绍 <a class="header-anchor" href="#actviex及esp32介绍" aria-label="Permalink to &quot;ActvieX及ESP32介绍&quot;">​</a></h2><p>ActiveX是微软公司开发的一种开放的软件组件技术，核心是组件对象模型COM（Component Object Model），它是一种二进制标准，用于定义软件组件之间的接口和交互方式。COM标准包括了一组规范和接口，用于定义组件的创建、销毁、查询、调用等操作。其最大的特点即<strong>允许不同的软件、组件在不同的应用程序之间进行交互和通信</strong>。一般而言，其通过在不同的应用程序中调用组件的接口来实现交互和通信。</p><p>ESP32是乐鑫公司推出的一款<strong>低成本、低功耗、高集成度的Wi-Fi和蓝牙SoC</strong>（System on Chip）芯片。相对于市面上常见的开发板如STM32、Arduino及Raspberry Pi，ESP32在性能相对强大、成本控制优秀的条件下支持Wi-Fi、蓝牙、丰富的外设接口、多核处理器、良好的开发生态系统和文档支持。</p><h2 id="软件和硬件的解耦" tabindex="-1">软件和硬件的解耦 <a class="header-anchor" href="#软件和硬件的解耦" aria-label="Permalink to &quot;软件和硬件的解耦&quot;">​</a></h2><p>基于ActiveX可以在<strong>多编程语言中调用</strong>的特性，在传统的应用层之前加入一个利用ActiveX实现的软件通讯层，实现诸如串口通讯、TCP通讯、HTTP通讯等通讯协议，方便工程师通过各种编程语言二次调用，实现传统应用层软件的功能解耦。</p><p>同时将传统的嵌入式系统分为硬件通讯层和硬件层，其中硬件通讯层使用国产的MCU（Microcontroller Unit）ESP32，负责将硬件层的信号转化为逻辑值并实现各种硬件通讯协议统一转化为USB通讯协议，通过<strong>一个ESP32带一个传感器</strong>，实现嵌入式系统的解耦。</p><p>具体见下图</p><div style="display:flex;justify-content:center;align-items:center;flex-direction:column;"><img src="'+e+'"><p style="margin-top:10px;color:#888888;">系统架构图</p></div><h2 id="具体应用" tabindex="-1">具体应用 <a class="header-anchor" href="#具体应用" aria-label="Permalink to &quot;具体应用&quot;">​</a></h2><p>经过软件层和硬件层的解耦，工程师可以十分方便的利用任何编程语言控制硬件，且硬件间是完全解耦的，可以直接物理连接配合。以下展示两个实例，对应单一传感器和多个传感器。</p><h3 id="温湿度传感器" tabindex="-1">温湿度传感器 <a class="header-anchor" href="#温湿度传感器" aria-label="Permalink to &quot;温湿度传感器&quot;">​</a></h3><p>用esp32连接单个温湿度传感器，通过vbs脚本调用activeX控件实现其信息读取。</p><p>具体演示如下：</p><video controls width="640"><source src="'+t+'" type="video/mp4"></video><h3 id="全站仪保护罩" tabindex="-1">全站仪保护罩 <a class="header-anchor" href="#全站仪保护罩" aria-label="Permalink to &quot;全站仪保护罩&quot;">​</a></h3><p>用esp32分别连接推杆、人体雷达、红外收发器、扬声器（见下图）。通过python调用activeX控件写出图形化程序，实现保护罩智能开启关闭的功能。</p><div style="display:flex;justify-content:center;align-items:center;flex-direction:column;"><img src="'+a+'"><p style="margin-top:10px;color:#888888;">各模块示意</p></div><p>具体演示如下：</p><video controls><source src="'+i+'" type="video/mp4"></video>',27),n=[p];function d(h,m,v,_,u,f){return c(),r("div",null,n)}const g=o(l,[["render",d]]);export{b as __pageData,g as default};
