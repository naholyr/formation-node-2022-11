// import io from 'socket.io-client'
/* global io */

(() => {
  const user = {};
  let socket;

  //////////////////////////////
  // CLIENT LOGIC TO COMPLETE //
  //////////////////////////////

  const fetchRegister = async (username, password) => {
    const response = await fetch("/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (response.status === 201) {
      return;
    }

    const body = await response.json();
    throw new Error(body.error);
  };

  const fetchLogin = async (username, password) => {
    // TODO HTTP: POST /auth/login + { username, password } => token
    const response = await fetch("/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const body = await response.json();

    if (body.error) {
      throw new Error(body.error);
    }

    console.log(body);

    throw new Error("Not implemented");

    return body.token;
  };

  const fetchCheck = async (token) => {
    // TODO HTTP: POST /auth/check + Authorization header => username
    return "Toto";
  };

  const initSocket = (token) => {
    // TODO WS: connect to websocket server
    socket = "...";

    // TODO WS: send "auth" + { token }
    // TODO WS: handle "unauthorized"
    // TODO WS: handle "received-message" + { text, date, author } event
    appendMessage({ date: "...", text: "...", author: "..." });
  };

  const sendMessage = (text) => {
    // TODO WS: emit "new-message" + { text }
  };

  ////////////////////////////////
  // CLIENT LOGIC TO KEEP AS IS //
  ////////////////////////////////

  // UI UPDATERS

  const handleLogin = async (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    const register = e.target.elements.register.checked;

    try {
      if (register) {
        await fetchRegister(username, password);
      }

      const token = await fetchLogin(username, password);
      if (token) {
        storeToken(token);
        handleLoggedIn(token, username);
      }
    } catch (err) {
      alert(err.message);
    }
  };

  const handleLoggedIn = (token, username) => {
    // Hide login form
    hide("#login-area");
    // Update user session in UI and memory
    user.username = username;
    updateText(".user-name", username);
    show("#user-area");

    initSocket(token);

    document
      .getElementById("chat-form")
      .addEventListener("submit", handleSendMessage);
    show("#chat-area");
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const text = e.target.elements.text.value;
    sendMessage(text);
    // Clear input and re-focus
    e.target.elements.text.value = "";
    e.target.elements.text.focus();
  };

  const appendMessage = ({ date, author, text }) => {
    const template = document.createElement("template");
    template.innerHTML = document
      .getElementById("template-chat-message")
      .innerText.trim();
    const element = template.content.firstChild;
    if (author === user.username) {
      element.classList.add("mine");
    }
    updateText(".date", new Date(date).toLocaleString(), element);
    updateText(".username", author, element);
    updateText(".text", text, element);
    const list = document.getElementById("chat-messages");
    list.appendChild(element);
    waitForDOM(() => (list.scrollTop = list.scrollHeight));
  };

  // AUTO-LOGIN LOGIC

  const storeToken = (token) => {
    localStorage.setItem("AUTH_TOKEN", token);
  };

  const getStoredToken = () => {
    return localStorage.getItem("AUTH_TOKEN");
  };

  const reconnect = async (token) => {
    const username = await fetchCheck(token);
    handleLoggedIn(token, username);
  };

  // UI INIT

  const init = () => {
    const token = getStoredToken();
    if (token) {
      reconnect(token);
    } else {
      hide("#user-area");
      hide("#chat-area");
      show("#login-area");
    }
    show("#app");
    document
      .getElementById("login-form")
      .addEventListener("submit", handleLogin);
  };

  // DOM UTILS

  const waitForDOM = (fn) =>
    requestAnimationFrame(() => requestAnimationFrame(fn));

  const updateText = (selector, text, container = document) =>
    container.querySelectorAll(selector).forEach((el) => (el.innerText = text));

  const show = (selector) =>
    document
      .querySelectorAll(selector)
      .forEach((el) => el.classList.remove("hidden"));

  const hide = (selector) =>
    document
      .querySelectorAll(selector)
      .forEach((el) => el.classList.add("hidden"));

  // BOOSTRAP

  window.addEventListener("load", init);
})();
