import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "react-native-paper";
import { styles } from "../../Styles/LoginStyles";
import { loginUser } from "../../utils/api";

const LoginScreen = ({ navigation }: any) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    setErrorMessage("");
    try {
      const data = await loginUser(email, password);
      if (!data.success) {
        setErrorMessage(data.message);
      } else {
        navigation.navigate("Main");
      }
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo and Banner */}
      <View style={styles.banner}>
        <Text style={styles.logo}>Pliē</Text>
        <Ionicons name="image-outline" size={50} color="black" />
      </View>

      {errorMessage ? (
        <Text style={styles.errorStyle}>{errorMessage}</Text>
      ) : null}

      {/* Login Form */}
      <View style={styles.form}>
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="email@email.com"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <Text>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={!passwordVisible}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
            style={styles.eyeIcon}
          >
            <Ionicons
              name={passwordVisible ? "eye" : "eye-off"}
              size={20}
              color="gray"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

        <Button
          mode="contained"
          style={styles.signInButton}
          onPress={handleLogin}
        >
          Sign In
        </Button>
        <Text style={styles.signupText}>
          Not a member? <Text style={styles.signupLink}>Sign Up Here</Text>
        </Text>

        {/* Social Login */}
        <View style={styles.OrText}>
          <View style={styles.line} />
          <Text style={styles.text}>or Sign In with:</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.socialButtons}>
          <TouchableOpacity style={styles.socialIcon}>
            <Ionicons name="logo-google" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon}>
            <Ionicons name="logo-apple" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon}>
            <Ionicons name="logo-facebook" size={30} color="black" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Text style={styles.guestText}>Enter as Guest</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
