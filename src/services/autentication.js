const apiKey = import.meta.env.VITE_TMDB_API_KEY;

/
export const handleLogin = async (userName, password) => {
  try {
    
    const tokenResponse = await fetch(`https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey}`);
    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok) {
      throw new Error(tokenData.status_message || 'Erro ao gerar o token.');
    }

    const token = tokenData.request_token;

    
    const loginResponse = await fetch(`https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: userName,
        password,
        request_token: token,
      }),
    });

    const loginData = await loginResponse.json();

    if (!loginResponse.ok) {
      throw new Error(loginData.status_message || 'Erro ao validar o login.');
    }

    // Etapa 3: Criar uma nova sessão
    const sessionResponse = await fetch(`https://api.themoviedb.org/3/authentication/session/new?api_key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        request_token: token,
      }),
    });

    const sessionData = await sessionResponse.json();

    if (!sessionResponse.ok) {
      throw new Error(sessionData.status_message || 'Erro ao criar a sessão.');
    }

    const sessionId = sessionData.session_id;
    console.log('Sessão criada com sucesso:', sessionId);

    return { success: true, sessionId };
  } catch (error) {
    console.error('Erro ao autenticar:', error.message);
    return { success: false, error: error.message };
  }
};


export const handleSignUp = async (userName, password) => {
  try {
    // Etapa 1: Gerar um novo token
    const tokenResponse = await fetch(`https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey}`);
    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok) {
      throw new Error(tokenData.status_message || 'Erro ao gerar o token.');
    }

    const token = tokenData.request_token;


    const createAccountResponse = await fetch(`https://api.themoviedb.org/3/account?api_key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: userName,
        password,
        request_token: token,
      }),
    });

    const createAccountData = await createAccountResponse.json();

    if (!createAccountResponse.ok) {
      throw new Error(createAccountData.status_message || 'Erro ao criar a conta.');
    }

    console.log('Conta criada com sucesso para o usuário:', userName);
    return { success: true };
  } catch (error) {
    console.error('Erro ao criar conta:', error.message);
    return { success: false, error: error.message };
  }
};
